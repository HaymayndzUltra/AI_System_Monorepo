PHASE?=all

run:
	./scripts/run_phase.sh $(PHASE)

phase-%:
	./scripts/run_phase.sh $*
