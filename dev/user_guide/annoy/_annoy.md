# ANNoy Cython[#](#annoy-cython "Link to this heading")

| Type | Introduced | Exact Width Guaranteed | Signedness | ISO C Minimum Width | Typical Width (Modern) | Minimum (Formula) | Maximum (Formula) | Overflow Semantics | Portability Risk | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| char | C89 | No | Implementation-defined | >=8 bits | 8 bits | 0 OR -2^(n-1) | 2^n-1 OR 2^(n-1)-1 | Signed: UB Unsigned: modulo | HIGH | Cannot assume signedness |
| signed char | C89 | No | Signed | >=8 bits | 8 bits | -2^(n-1) | 2^(n-1)-1 | UB on overflow | LOW | Distinct type from char |
| unsigned char | C89 | No | Unsigned | >=8 bits | 8 bits | 0 | 2^n-1 | Modulo 2^n | LOW | Only type guaranteed to hold raw byte data |
| short | C89 | No | Signed | >=16 bits | 16 bits | -2^(n-1) | 2^(n-1)-1 | UB on overflow | LOW | At least 16 bits |
| unsigned short | C89 | No | Unsigned | >=16 bits | 16 bits | 0 | 2^n-1 | Modulo 2^n | LOW |  |
| int | C89 | No | Signed | >=16 bits | 32 bits | -2^(n-1) | 2^(n-1)-1 | UB on overflow | MED | Most efficient native integer |
| unsigned int | C89 | No | Unsigned | >=16 bits | 32 bits | 0 | 2^n-1 | Modulo 2^n | LOW |  |
| long | C89 | No | Signed | >=32 bits | 32 or 64 bits | -2^(n-1) | 2^(n-1)-1 | UB on overflow | HIGH | 32-bit (Windows), 64-bit (Linux/macOS) |
| unsigned long | C89 | No | Unsigned | >=32 bits | 32 or 64 bits | 0 | 2^n-1 | Modulo 2^n | HIGH | Platform dependent |
| long long | C99 | No | Signed | >=64 bits | 64 bits | -2^63 | 2^63-1 | UB on overflow | LOW | At least 64 bits |
| unsigned long long | C99 | No | Unsigned | >=64 bits | 64 bits | 0 | 2^64-1 | Modulo 2^64 | LOW |  |
| int8\_t | C99 | Yes (if exists) | Signed | Exactly 8 bits | 8 bits | -2^7 | 2^7-1 | UB on overflow | NONE | max 127 items, Requires exact-width support |
| uint8\_t | C99 | Yes (if exists) | Unsigned | Exactly 8 bits | 8 bits | 0 | 2^8-1 | Modulo 2^8 | NONE | max 255 items |
| int16\_t | C99 | Yes (if exists) | Signed | Exactly 16 bits | 16 bits | -2^15 | 2^15-1 | UB on overflow | NONE | max 32 767 items |
| uint16\_t | C99 | Yes (if exists) | Unsigned | Exactly 16 bits | 16 bits | 0 | 2^16-1 | Modulo 2^16 | NONE | max 65 535 items |
| int32\_t | C99 | Yes (if exists) | Signed | Exactly 32 bits | 32 bits | -2^31 | 2^31-1 | UB on overflow | NONE | max ~2.1 E8 B items, 4 bytes/node-id |
| uint32\_t | C99 | Yes (if exists) | Unsigned | Exactly 32 bits | 32 bits | 0 | 2^32-1 | Modulo 2^32 | NONE | max ~4.3 E9 (10⁹) B items, 4 bytes/node-id |
| int64\_t | C99 | Yes (if exists) | Signed | Exactly 64 bits | 64 bits | -2^63 | 2^63-1 | UB on overflow | NONE | max ~9.2 E18 items |
| uint64\_t | C99 | Yes (if exists) | Unsigned | Exactly 64 bits | 64 bits | 0 | 2^64-1 | Modulo 2^64 | NONE | max ~1.8 × E19 (10¹⁹) items, 8 bytes/node-id |