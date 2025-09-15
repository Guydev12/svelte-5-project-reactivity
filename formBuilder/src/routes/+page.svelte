<script lang="ts">
	import FormBuilder from '$lib/FormBuilder.svelte';
	import Modals from '$lib/Modals.svelte';
	import TextInput from '$lib/TextInput.svelte';
	import type { FieldsInput } from '$lib/type';

	let fields: FieldsInput[] = $state([]);
	let open: boolean = $state(false);
	//$inspect(fields);
	function ontoggle() {
		open = !open;
	}

	//$inspect(name);
	function handleSubmit(e: Event) {
		e.preventDefault();
		const formData: Record<string, string> = {};
		fields.forEach((field) => {
			const key = field.name || field.placeholder || `field-${field.id}`;
			formData[key] = field.value as string;
		});
		alert(JSON.stringify(formData));
	}
</script>

{#if open}
	<Modals {ontoggle}>
		<FormBuilder {fields} />
	</Modals>
{/if}
<div class="flex flex-row items-center justify-between w-full">
	<h1 class="font-bold text-2xl underline shadow">Form builder</h1>
	<button
		onclick={ontoggle}
		class="w-10 h-10 shadow-md bg-blue-400 text-amber-50 rounded-full flex items-center justify-center font-bold text-2xl"
		>+</button
	>
</div>
<form
	onsubmit={handleSubmit}
	class="flex flex-col items-center justify-center gap-4 rounded w-full md:w-[400px] mt-5 min-h-[100px] p-4 shadow shadow-cyan-500"
>
	{#if fields.length < 1}
		<p class="text-center font-bold text-gray-500">
			Create your first form <br />by <br />clicking the plus button
		</p>
	{/if}
	{#each fields as { id, type, name, placeholder, required }, i (id)}
		<TextInput {id} {type} {name} {placeholder} bind:value={fields[i].value} {required} />
	{/each}
	{#if fields.length > 0}
		<button class="w-full p-3 bg-blue-500 text-white font-bold" type="submit">Submit</button>
	{/if}
</form>
