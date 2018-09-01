<template>
    <span class="seat-place" :class="getClass()" v-on:click="!occupied && select(pos, !selected)">
                    {{pos.col}}
                </span>
</template>

<script>
	export default {
		name: 'Seat',
		props: ['select', 'pos', 'occupied', 'selected'],
		methods: {
			getClass(){
				return this.occupied ? 'occupied' : this.selected ? 'selected' : '';
			},
		}

	};
</script>

<style scoped>
    .seat-place {
        width: 20px;
        height: 20px;
        line-height: 20px;
        display: inline-block;
        border: 1px solid gray;
        border-radius: 3px;
        font-size: 10px;
        margin: 0 5px 5px 0;
    }

    .seat-place:not(.occupied) {
        cursor: pointer;
        background: white;
        color: black;
        opacity: 0.4;

    }

    .seat-place:not(.occupied):hover {
        opacity: 1;
    }

    .seat-place.occupied {
        cursor: default;
        background: hsl(9, 88%, 41%);
    }

    .seat-place.selected {
        background: hsl(58, 100%, 70%);
        opacity: 1;
    }
</style>
