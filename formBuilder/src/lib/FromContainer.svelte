<script lang="ts">
	let props: { onsubmit: (e: Event) => void; children: any; classNames?: string } = $props();
</script>

<form onsubmit={props.onsubmit} class={`flex text-white flex-col mt-8 gap-4 ${props.classNames}`}>
	{@render props.children?.()}
</form>
