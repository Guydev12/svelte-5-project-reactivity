<script lang="ts">
	export let placeholder: string = 'Label';
	export let type: string = 'text';
	export let value: string = '';
	export let name: string = '';
	export let required: boolean = false;
	export let id: string | undefined | null;

	// function handleInput(e: Event) {
	// 	const target = e.target as HTMLInputElement;
	// 	value = target.value;
	// }
</script>

<div class="relative w-full">
	<input
		bind:value
		{type}
		{id}
		{name}
		{required}
		class="
      peer
      w-full
      border-b-2
      border-gray-300
      bg-transparent
      text-gray-900
      placeholder-transparent
      focus:outline-none
      focus:border-blue-600
      py-2
    "
		{placeholder}
	/>

	<label
		for={id}
		class="
      absolute
      left-0
      -top-2
      text-gray-500
      text-sm
      transition-all
      peer-placeholder-shown:text-gray-400
      peer-placeholder-shown:text-base
      peer-placeholder-shown:top-2
      peer-placeholder-shown:left-0
      peer-focus:-top-3.5
      peer-focus:text-sm
      peer-focus:text-blue-600
    "
	>
		{placeholder}
	</label>
</div>
