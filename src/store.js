import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		orderHistory: [],
		ticketPrice: 1.1,
		rows: 10,
		cols: 12,
		occupiedSeats: [{row:1,col:2}],
		selectedSeats: [],
	},
	mutations: {
		cancel(state){
			state.selectedSeats = [];
		},
		order(state, total){
			state.occupiedSeats = state.occupiedSeats.concat(state.selectedSeats);
			state.orderHistory.push({seats: state.selectedSeats, total, date: new Date()});
			state.selectedSeats = [];
		},
		selectSeat(state, {row, col, selected}){
			if (!selected) {
				const seat = state.selectedSeats.find(({row:r, col:c}) => row === r && col === c)
				state.selectedSeats.splice(state.selectedSeats.indexOf(seat), 1);

			} else {
				state.selectedSeats.push({row, col});
			}
		}

	},
});
