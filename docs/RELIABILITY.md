# Wave Reliability Center

The Reliability Center is available under **Settings → Reliability**.

## Health checks

**Run checks** verifies that the application has its required dashboard, sidebar, and task-dialog elements and records whether Wave is operating in local or authenticated cloud mode.

## Recovery backups

**Download recovery backup** creates a versioned JSON file containing the current workspace. Treat it as potentially sensitive.

Restore safeguards:

- maximum file size of 5 MB
- exact `wave-recovery` format identifier
- supported format version
- workspace collection shape validation
- allow-list copy using fields defined by Wave defaults
- explicit confirmation before browser data is replaced

The current browser workspace is not modified when validation fails or the confirmation is cancelled.

## Diagnostics

Wave stores at most 20 diagnostic events in browser local storage. It records client runtime errors, unhandled promise failures, recovery activity, save failures, and manual reliability checks. The diagnostic report includes browser information but excludes the workspace payload.

Diagnostics are local until the tester deliberately downloads and shares a report.

## Recovery exercise

Before a beta session:

1. Create a task with recognizable test text.
2. Download a recovery backup.
3. Make another change.
4. Restore the downloaded backup.
5. Confirm the first task exists and the later change is gone.
6. Run checks and download a diagnostic report.
