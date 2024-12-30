stable:
	@# ln -s /path/to/target /path/to/link
	mkdir -p stable && ln -rsf 0.4/ stable/
	@echo "Created symbolic links for stable..."

prev:
	mkdir -p prev && ln -rsf 0.3/ prev/
	@echo "Created symbolic links for prev..."

mini:
	mkdir -p mini && ln -rsf 0.3.7/ mini/
	@echo "Created symbolic links for mini..."