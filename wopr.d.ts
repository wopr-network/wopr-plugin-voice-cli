/**
 * Type stubs for the 'wopr' peer dependency.
 * Replace with @wopr-network/plugin-types once published.
 */
declare module "wopr" {
	export interface PluginLogger {
		info(msg: string): void;
		error(msg: string): void;
		warn(msg: string): void;
		debug(msg: string): void;
	}

	export interface VoiceMetadata {
		name: string;
		version: string;
		description?: string;
		emoji?: string;
		local?: boolean;
	}

	export interface TTSVoice {
		id: string;
		name?: string;
		gender?: string;
		description?: string;
	}

	export interface STTProvider {
		metadata: VoiceMetadata;
		transcribe(audio: Buffer, options?: Record<string, unknown>): Promise<{ text: string; durationMs: number; confidence?: number }>;
	}

	export interface TTSProvider {
		metadata: VoiceMetadata;
		voices: TTSVoice[];
		synthesize(text: string, options?: Record<string, unknown>): Promise<{ audio: Buffer; format: string; sampleRate?: number; durationMs: number }>;
	}

	export interface WOPRPluginContext {
		log: PluginLogger;
		getExtension<T = unknown>(name: string): T | undefined;
		hasCapability(capability: string): boolean;
	}

	export interface PluginCommand {
		name: string;
		description: string;
		usage?: string;
		handler(ctx: WOPRPluginContext, args: string[]): Promise<void>;
	}

	export interface WOPRPlugin {
		name: string;
		version: string;
		description: string;
		commands?: PluginCommand[];
		init?(ctx: WOPRPluginContext): Promise<void>;
		shutdown?(): Promise<void>;
	}
}
