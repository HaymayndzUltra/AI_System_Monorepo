PHASE?=all

run:
	./scripts/run_phase.sh $(PHASE)

phase-%:
	./scripts/run_phase.sh $*

# Router demo targets
router:
	./src/router.cjs "$(TEXT)"

demo:
	./src/router.cjs "please analyze and apply security overlay with modify change"
