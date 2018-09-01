<template>
    <div class="side-panel">
        <div>
            <div> Cost of the one ticket: <b>{{price}} </b>rub</div>
            <div> Please click on seat to book it.</div>
        </div>
        <dl>
            <dt>Total Seats: </dt><dd>{{ total }}</dd>
            <dt>Available seats:</dt> <dd>{{ availableSeats }}</dd>
        </dl>

    </div>
</template>

<script>

	export default {
		name: 'SidePanel',
		props: ['total', 'availableSeats', 'price']
	};
</script>

<style scoped>
    .side-panel {
        flex: 0.25;
        text-align: left;
    }
    dt{
        float: left;
    }
    dd{
        font-weight: bold;
    }
</style>
