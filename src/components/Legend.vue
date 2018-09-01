<template>
    <div class="legend">
        <span>Booked seats:  <i class="seat-place occupied"></i></span>
        <span>Seats to occupy:  <i class="seat-place"></i></span>
        <span>Your current selection:  <i class="seat-place selected"></i></span>
    </div>

</template>

<script>
	export default {
		name: 'Legend',
	};
</script>

<style scoped>
    .legend {
        padding: 20px 0;
        font-size: 12px;
        justify-content: space-around;
        line-height: 20px;
        display: flex;
    }

    .seat-place {
        width: 15px;
        height: 15px;
        line-height: 20px;
        display: inline-block;
        border: 1px solid gray;
        border-radius: 3px;
        margin-left: 10px;
        font-size: 10px;
        background: white;
        color: black;
        opacity: 0.4;
    }

    span{
        display: flex;
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
