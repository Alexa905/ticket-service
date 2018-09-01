<template>
    <div class="orders-history" v-if="orders.length">
        <h2>Your orders:</h2>
        <dl class="order" v-for="(order, index) in orders" :key="index">
            <dt>Order #</dt>
            <dd>{{index}}</dd>
            <dt>Seats:</dt>
            <dd>{{ getSeats(order)}}</dd>
            <dt>Total cost: </dt>
            <dd>{{ order.total}}</dd>
        </dl>
    </div>
    <div v-else>
        <span>Booking history</span>
    </div>

</template>

<script>
	export default {
		name: 'OrderHistory',
		data() {
			return {
				orders: this.$store.state.orderHistory
			}
		},
        methods:{
	        getSeats(order){
		        return order.seats.map(obj=> `row ${obj.row} seat ${obj.col}`).join(', ');
	        }
        }
	};
</script>

<style scoped>
    .orders-history{
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    h2{
        flex: 1;
    }
    .order{
        text-align: left;
    }
    dl {
        width: 30%;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, .1);
        text-align: left;
        padding: 20px;
        margin: 0 10px 25px 20px;
        background: #ffe8c7;
        border-radius: 2px;
    }

    dl:first-child {
        background: #ffe8c7;
    }

    dl:nth-of-type(2n) {
        background: #a8cbff;
    }

    dl:nth-of-type(3n) {
        background: #fffe8d;
    }

    dl:last-child {
        background: #adffbf;
    }
    dt{
        float: left;
    }
    dd{
       font-weight: bold;
    }
</style>
