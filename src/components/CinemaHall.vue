<template>
    <div class="cinema-hall">

        <div class="screen">Screen</div>

        <div class="rows">
            <div class="row" v-for="row in rows" :key="row">
                <span class="row-number">{{row}} </span>
                <span v-for="col in cols" :key="col">
                     <seat :pos="{row, col}"
                           :occupied="isOccupied(row,col)"
                           :selected="isSelected(row,col)"
                           :select="selectSeat"></seat>
                </span>
            </div>
        </div>

        <Legend/>

    </div>
</template>


<script>
	import Seat from '@/components/Seat.vue';
	import Legend from '@/components/Legend.vue';

	export default {
		name: 'CinemaHall',
		props: ['rows', 'cols', 'occupiedSeats', 'selectedSeats'],
		components: {Seat, Legend},
		methods: {
			selectSeat(pos, selected){
				this.$store.commit('selectSeat', {row: pos.row, col: pos.col, selected});
			},
			isOccupied(r, c){
				return this.occupiedSeats.find(({row, col}) => row === r && col === c)
			},
			isSelected(r, c){
				return this.selectedSeats.find(({row, col}) => row === r && col === c)
			}
		},
	};
</script>

<style scoped>

    .screen {
        width: 80%;
        height: 25px;
        background: gray;
        margin: 0 auto 20px auto;
        color: white;
    }

    .cinema-hall {
        flex: 0.5;
    }

    .row-number {
        width: 30px;
        display: inline-block;

    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }

    li {
        width: 30%;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, .1);
        text-align: left;
        margin: 0 10px 25px 20px;
        background: #ffe8c7;
        border-radius: 2px;
    }

    li:first-child {
        background: #ffe8c7;
    }

    li:nth-of-type(2n) {
        background: #a8cbff;
    }

    li:nth-of-type(3n) {
        background: #fffe8d;
    }

    li:last-child {
        background: #adffbf;
    }

    a {
        color: #5e5e5e;
        padding: 0 10px 10px;
        text-decoration: none;
        display: block;
        transition: all 0.3s;
        position: relative;
        background: rgba(255, 255, 255, .5);
    }

    a:hover {
        background: rgba(255, 255, 255, .0);
    }

    a:hover:after {
        content: "View more";
        position: absolute;
        top: 8px;
        right: 12px;
        color: white;
        font-size: 12px;
        opacity: 1;
        z-index: 10;
    }
</style>
