# Docker Desktop WSL Recovery Guidelines[#](#docker-desktop-wsl-recovery-guidelines "Link to this heading")

## Windows WSL + Cross-Platform Notes[#](#windows-wsl-cross-platform-notes "Link to this heading")

Canonical, safe, production-grade recovery procedure for restoring Docker
environments when backend storage is intact but runtime layer is broken.

## 1. Situation Overview (Windows WSL2 Case)[#](#situation-overview-windows-wsl2-case "Link to this heading")

This guide applies when:

* Docker Desktop is stuck on “Starting…”
* `wsl -l -v` shows no distributions
* BUT Docker disk files still exist:

  * ext4.vhdx
  * docker\_data.vhdx

Interpretation:

* WSL metadata is broken
* Docker engine is not registered
* UI cannot attach backend
* Container data still exists on disk

## 2. Architecture Model (Critical Understanding)[#](#architecture-model-critical-understanding "Link to this heading")

Docker Desktop WSL2 stores state in virtual disks:

| Component | File | Purpose |
| --- | --- | --- |
| System | ext4.vhdx | Linux VM + Docker engine |
| Data | docker\_data.vhdx | images, containers, vols |

These are full filesystem images (not archives).

## 3. Critical Safety Rules[#](#critical-safety-rules "Link to this heading")

DO NOT:

* Delete E:DockerDesktopWSL
* Run wsl –unregister docker-desktop-data
* Reinstall Docker Desktop before recovery
* Manually convert or modify .vhdx files

DO:

* Keep .vhdx files untouched
* Use WSL import mechanisms only
* Verify before restarting Docker

## 4. Pre-check (System Validation)[#](#pre-check-system-validation "Link to this heading")

```
wsl --version
wsl --status

```

Expected:

* WSL installed
* Virtualization enabled

## 5. Recovery Strategy (Preferred Method)[#](#recovery-strategy-preferred-method "Link to this heading")

Step 1 — Stop services

```
wsl --shutdown
Stop-Service com.docker.service

```

Step 2 — Restore system disk

```
wsl --import-in-place docker-desktop "E:\DockerDesktopWSL\DockerDesktopWSL\main\ext4.vhdx"

```

Step 3 — Restore data disk

```
wsl --import-in-place docker-desktop-data "E:\DockerDesktopWSL\DockerDesktopWSL\disk\docker_data.vhdx"

```

## 6. Fallback Method (Compatibility Mode)[#](#fallback-method-compatibility-mode "Link to this heading")

If import-in-place is not available:

System:

```
wsl --import docker-desktop E:\DockerDesktopWSL\recovery\docker-desktop \
"E:\DockerDesktopWSL\DockerDesktopWSL\main\ext4.vhdx" --vhd

```

Data:

```
wsl --import docker-desktop-data E:\DockerDesktopWSL\recovery\docker-desktop-data \
"E:\DockerDesktopWSL\DockerDesktopWSL\disk\docker_data.vhdx" --vhd

```

## 7. Verification[#](#verification "Link to this heading")

```
wsl -l -v

```

Expected:

* docker-desktop
* docker-desktop-data

## 8. Restart Docker[#](#restart-docker "Link to this heading")

```
Start-Service com.docker.service

```

Then open Docker Desktop UI.

## 9. Root Causes[#](#root-causes "Link to this heading")

Typical failures:

* Windows update breaks WSL registry
* Docker Desktop upgrade mismatch
* Corrupted WSL metadata

.vhdx files remain intact unless deleted manually.

## 10. Failure Handling[#](#failure-handling "Link to this heading")

File in use:

```
wsl --shutdown

```

WSL missing:

```
wsl --install

```

## 11. Recovery Outcome[#](#recovery-outcome "Link to this heading")

If .vhdx intact:

* Containers restored
* Images restored
* Volumes preserved
* No data loss

## 12. Key Principle[#](#key-principle "Link to this heading")

Docker Desktop = WSL control layer + VHDX storage layer

If storage exists:

* Data is safe
* Only mapping must be rebuilt

## 13. Summary Flow[#](#summary-flow "Link to this heading")

1. Stop WSL + Docker
2. Import ext4.vhdx
3. Import docker\_data.vhdx
4. Verify WSL distros
5. Restart Docker Desktop

## 14. Linux Recovery Notes[#](#linux-recovery-notes "Link to this heading")

Storage:

/var/lib/docker

Restart:

```
sudo systemctl restart docker

```

Inspect:

```
sudo du -sh /var/lib/docker

```

## 15. macOS Recovery Notes[#](#macos-recovery-notes "Link to this heading")

Storage:

```
~/Library/Containers/com.docker.docker/Data/vms/0/Docker.raw

```

Actions:

* Restart Docker Desktop
* Use Troubleshoot reset if needed

Cross-platform model:

| OS | Storage model |
| --- | --- |
| Windows Linux macOS | WSL2 + VHDX Native filesystem VM disk image |

## Final Warning[#](#final-warning "Link to this heading")

Do not reinstall or clean Docker before recovery is confirmed.