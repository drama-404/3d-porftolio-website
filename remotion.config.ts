import { Config } from '@remotion/cli/config';

/**
 * Remotion CLI Configuration
 *
 * This configures the Remotion Studio and rendering behavior.
 * The entry point is set to remotion/index.ts which exports Root.
 */

// Set the entry point for Remotion
Config.setEntryPoint('./remotion/index.ts');

// Output codec settings for rendering
Config.setCodec('h264');

// Overwrite output files without prompting
Config.setOverwriteOutput(true);
