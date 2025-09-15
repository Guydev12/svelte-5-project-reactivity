<script lang="ts">
	import FromContainer from './FromContainer.svelte';
	import type { FieldsInput } from './type';
	let label = $state('');
	let type = $state('text');
	let required = $state(false);
	let props: { fields: FieldsInput[] } = $props();
	//$inspect(props.fields);
	function addField() {
		let newField = {
			id: window.crypto.randomUUID(),
			type,
			required,
			name: '',
			placeholder: label
		};

		props.fields.push(newField);
		label = '';
		type = '';
		required = false;
	}
</script>

<FromContainer onsubmit={addField}>
	<label>
		Label
		<input
			class="outline-0 border-0 w-full p-3 rounded bg-gray-500/5"
			type="text"
			bind:value={label}
		/>
	</label>

	<label>
		Type
		<select
			bind:value={type}
			class="w-full p-3 rounded bg-gray-500/5 outline-0 border-0 text-white"
		>
			{#each ['text', 'email', 'password', 'textarea'] as t, i (i)}
				<option value={t}>{t}</option>
			{/each}
		</select>
	</label>

	<label class="flex items-center gap-2">
		<input type="checkbox" bind:checked={required} />
		Required
	</label>

	<button type="submit" class="bg-blue-600 w-full text-white py-2 rounded"> Create </button>
</FromContainer>
