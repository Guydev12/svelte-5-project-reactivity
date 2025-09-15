import type { HTMLInputTypeAttribute } from 'svelte/elements';

export type FieldsInput = {
	id: string;
	type?: HTMLInputTypeAttribute | undefined;
	name?: string | undefined;
	placeholder?: string | undefined;
	value?: string | undefined;
	required: boolean | undefined;
};
