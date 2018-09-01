<template>
    <div class="order-panel">
        <div v-if="selectedSeats.length">

            <h3>Your order: </h3>
            <div>Total tickets amount: <em>{{ selectedSeats.length}}</em></div>
            <div>Selected seats: <em>{{ getSeats()}}</em></div>
            <div>Total cost: <em>{{total}} rub.</em></div>

            <div class="buttons">
                <button v-on:click="order">Order</button>
                <button v-on:click="cancel">Cancel</button>
            </div>
        </div>
        <div v-else>You can check your previous orders
            <router-link :to="{ path: `/order-history` }" replace>here</router-link>
        </div>
    </div>


</template>

<script>
	export default {
		name: 'OrderDetails',
		props: ['selectedSeats', 'ticketPrice'],
		computed: {
			total(){
				return (this.selectedSeats.length * this.ticketPrice).toFixed(2)
			}
		},
		methods: {
			order(){
				this.$store.commit('order', this.total);
			},
			cancel(){
				this.$store.commit('cancel');
			},
			getSeats(){
				return this.selectedSeats.map(obj => `row ${obj.row} seat ${obj.col}`).join(', ');
			}
		}
	};
</script>

<style scoped>
    .order-panel {
        flex: 0.25;
    }

    h3{
        margin-top: 0;
    }

    em {
        font-weight: bold;
        font-size: 14px;
    }

    .buttons {
        margin: 20px;
    }

    button {
        margin: 0 10px;
        cursor: pointer;
        padding: 5px 20px;
    }

    a{
        color: inherit;
    }
</style>
