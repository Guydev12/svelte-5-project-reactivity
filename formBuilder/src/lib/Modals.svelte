<script lang="ts">
	import FromContainer from './FromContainer.svelte';

	let props: { ontoggle: () => void; children: any } = $props();
</script>

<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
	<div class="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg relative">
		{@render props.children?.()}
		<button
			class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded"
			onclick={props.ontoggle}
		>
			✕
		</button>
	</div>
</div>
