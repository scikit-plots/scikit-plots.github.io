stable:
	@# ln -s /path/to/target /path/to/link
	ln -rsf 0.4/ stable
	@echo "Created symbolic links for stable..."

prev:
	ln -rsf 0.3/ prev
	@echo "Created symbolic links for prev..."

mini:
	ln -rsf 0.3.7/ mini
	@echo "Created symbolic links for mini..."