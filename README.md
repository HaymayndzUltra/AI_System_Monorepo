# AI-Governed Development Framework

A comprehensive framework for implementing AI-driven development governance, phase management, and quality assurance across software development lifecycles.

## Overview

This monorepo implements a complete AI-Governed Development Framework that provides:

- **Automated Phase Management**: Seamless transitions between development phases (F1-F10)
- **Intelligent Rule Engine**: Configurable rules and policies for code quality and compliance
- **Dual Validation System**: Auditor and Validator frameworks for comprehensive quality assessment
- **Trigger System**: Event-driven automation for Git, Cursor IDE, and CI/CD integration
- **Immutable Artifact Management**: Version-controlled, tamper-proof documentation and code artifacts

## Architecture

```
ai-system-monorepo/
├── frameworks/           # Core framework components
│   ├── ai-governor/     # Central orchestration engine
│   ├── auditor/         # Quality assessment system
│   └── validator/       # Final validation and approval
├── docs/               # Phase-specific documentation
│   ├── discovery/      # F1: Requirements discovery
│   ├── planning/       # F2: Product planning
│   ├── architecture/   # F4: System architecture
│   └── ...            # Additional phases
├── src/               # Implementation code
│   ├── frontend/      # Frontend components
│   └── backend/       # Backend services
├── tests/             # Comprehensive test suite
└── .cursor/rules/     # Cursor IDE integration rules
```

## Quick Start

### Prerequisites

- Node.js 18+ 
- TypeScript 5+
- Git
- Cursor IDE (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-system-monorepo

# Install dependencies
npm install

# Build all frameworks
npm run build

# Start development environment
npm run dev
```

### Basic Usage

```bash
# Start the AI-Governor service
npm run dev:governor

# Validate current phase
npm run validate -- --phase F1

# Transition to next phase
npm run transition -- --from F1 --to F2

# Run quality audit
npm run audit
```

## Framework Components

### AI-Governor

The central orchestration engine that manages:
- Phase transitions and validation
- Rule evaluation and enforcement
- Trigger processing and automation
- Workflow coordination

**Key Features:**
- RESTful API for integration
- Real-time phase monitoring
- Configurable rule engine
- Event-driven triggers

### Auditor Framework

Comprehensive quality assessment system providing:
- Code quality evaluation
- Compliance checking
- Traceability analysis
- Risk assessment
- Quantitative scoring (0-100)

**Evaluation Criteria:**
- Code Quality (40%)
- Architecture (30%)
- Compliance (20%)
- Risk Assessment (10%)

### Validator Framework

Final validation and approval system featuring:
- Consensus building between validation sources
- Evidence collection and verification
- Go/no-go decision making
- Conflict resolution
- Repository alignment checking

## Development Phases

The framework supports 10 distinct development phases:

1. **F1 - Discovery**: Requirements discovery and analysis
2. **F2 - Planning**: Product planning and roadmap development
3. **F3 - UX/UI Design**: User experience and interface design
4. **F4 - Architecture**: System architecture and API design
5. **F5 - Data/ML**: Data modeling and ML pipeline design
6. **F6 - Implementation**: Backend and frontend implementation
7. **F7 - QA Testing**: Quality assurance and testing
8. **F8 - Security**: Security assessment and compliance
9. **F9 - Release**: Deployment and release management
10. **F10 - Observability**: Monitoring, analytics, and retrospective

## Integration

### Cursor IDE Integration

The framework integrates seamlessly with Cursor IDE through:
- Real-time rule application
- Automated phase validation
- Context-aware suggestions
- Workflow automation

### Git Integration

Automated Git workflow integration:
- Pre-commit hooks for validation
- Phase transition triggers
- Artifact validation
- Compliance checking

### CI/CD Integration

Continuous integration and deployment:
- Automated quality gates
- Phase-based deployment
- Compliance verification
- Performance monitoring

## Configuration

### Environment Variables

```bash
# AI-Governor Configuration
AI_GOVERNOR_PORT=3000
AI_GOVERNOR_ENV=development
AI_GOVERNOR_LOG_LEVEL=info

# Auditor Configuration
AUDITOR_THRESHOLD=80
AUDITOR_CRITERIA=code-quality,architecture,compliance,risk

# Validator Configuration
VALIDATOR_CONSENSUS_THRESHOLD=75
VALIDATOR_EVIDENCE_REQUIRED=true
```

### Rule Configuration

Rules are defined in `.cursor/rules/` and can be customized per project:

```yaml
---
description: "TAGS: [quality,code] | TRIGGERS: code,quality,review | SCOPE: implementation | DESCRIPTION: Code quality validation rules"
alwaysApply: false
---

# Code Quality Rules
- Minimum test coverage: 80%
- Maximum cyclomatic complexity: 10
- Required documentation coverage: 90%
```

## API Reference

### AI-Governor API

```bash
# Health check
GET /health

# Get all phases
GET /phases

# Validate phase
POST /phases/:id/validate

# Transition phase
POST /phases/transition

# Get rules
GET /rules?phase=F1

# Process trigger
POST /triggers/:id/process
```

### Auditor API

```bash
# Run audit
POST /audit
{
  "phase": "F1",
  "artifacts": ["brief.md", "rad.md"]
}

# Get audit results
GET /audit/:id

# Get quality score
GET /quality-score/:phase
```

### Validator API

```bash
# Validate phase
POST /validate
{
  "phase": "F1",
  "auditResults": {...}
}

# Get validation decision
GET /validation/:id

# Resolve conflicts
POST /conflicts/:id/resolve
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

- Documentation: [docs/](docs/)
- Issues: [GitHub Issues](https://github.com/your-org/ai-system-monorepo/issues)
- Discussions: [GitHub Discussions](https://github.com/your-org/ai-system-monorepo/discussions)

---

*This framework is designed to evolve with your development practices. Start with the basics and gradually adopt more advanced features as your team grows.*