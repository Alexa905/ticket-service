<template>
    <div class="ticket-office">
        <side-panel :total="totalSeats" :availableSeats="availableSeats" :price="ticketPrice"></side-panel>

        <cinema-hall :rows="rows" :cols="cols" :occupiedSeats="$store.state.occupiedSeats" :selectedSeats="$store.state.selectedSeats"></cinema-hall>

        <order-panel :ticketPrice="ticketPrice" :selectedSeats="$store.state.selectedSeats"></order-panel>

    </div>
</template>

<script>

	import CinemaHall from '@/components/CinemaHall.vue';
	import SidePanel from '@/components/SidePanel.vue';
	import OrderPanel from '@/components/OrderPanel.vue';

	export default {
		name: 'Home',
		data() {
			return {
				rows: this.$store.state.rows,
				cols: this.$store.state.cols,
				ticketPrice: this.$store.state.ticketPrice,
			};
		},
		components: {CinemaHall, SidePanel, OrderPanel},
		computed: {
			availableSeats() {
				return this.totalSeats - this.$store.state.occupiedSeats.length
			},
			totalSeats() {
				return this.rows * this.cols;
			},
		},
	};
</script>

<style scoped>
    .ticket-office {
        display: flex;
    }

</style>
