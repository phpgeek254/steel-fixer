<template>
<div>
    <v-layout row>
        <v-flex>

            <h2> Loading </h2>
            <h2> Number of Floors : {{ column.numberOfFloors }}</h2>
            <h3> Imposed Loading : = {{ column.live_load }} KN/M <sup>2</sup></h3>
            <h3> Column Self Weight : = {{ column.selfWeight}}</h3>
            <DisplayLoading :load_type="column.slabLoading" type="slab"></DisplayLoading>
            <DisplayLoading :load_type="column.beamLoading" type="beam"></DisplayLoading>
            <DisplayLoading :load_type="column.wallLoading" type="wall"></DisplayLoading>

            <h2> Total dead load = {{ calculateTotalDeadLoad() }} KN </h2>
            <h2> Total dead for all Floors = {{ deadLoadForAllFloors() }} KN </h2>
            <h2> Imposed Loading : =
                {{ column.live_load }} KN/M <sup>2</sup> x Area of influence = {{ imposedLoadOnAreaOfInfluence() }} KN
            </h2>
            <h2> Imposed Loading for all floors : =  {{ imposedLoadingForAllFloors() }} KN
            </h2>
            <h2>
                Design Loading : 1.4Gk + 1.6Qk = {{ calculateDesignLoading() }} KN
            </h2>
            <h2>
                Area Required : {{ areaOfSteel()  }}
            </h2>
            <h2>
                Area Provided : {{ column.selectedBars.areaProvided  }}
            </h2>

        </v-flex>
    </v-layout>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import DisplayLoading from "../Loads/DispalyLoading";
    export default {
        name: "DisplayLoadingResults",
        components: {DisplayLoading},
        computed: {
            ...mapGetters(['column']),
        },
        methods: {
            calculateTotalLoadForMember(member) {
                let totalDealLoad = 0;
                member.forEach((load) => {
                    totalDealLoad += parseFloat((load.length/1000 * load.width/1000 * load.thickness/1000 * 24 * load.numberOfMembers).toFixed(2))
                });
                return totalDealLoad;
            },
            imposedLoadingForAllFloors() {
                if(this.column.slabLoading && this.column.slabLoading.length)
                    return this.column.numberOfFloors * this.column.live_load * this.column.slabLoading[0].length/1000 * this.column.slabLoading[0].width/1000;
            },
            calculateTotalDeadLoad () {
                return this.calculateTotalLoadForMember(this.column.beamLoading) +
                    this.calculateTotalLoadForMember(this.column.slabLoading) +
                    this.calculateTotalLoadForMember(this.column.wallLoading) +
                    this.column.selfWeight;
            },
            deadLoadForAllFloors() {
                return parseFloat((this.calculateTotalDeadLoad() * this.column.numberOfFloors).toFixed(2));
            },
            calculateDesignLoading() {
                return parseFloat((1.4 * this.deadLoadForAllFloors()) + (1.6 * this.imposedLoadingForAllFloors()).toFixed(2))
            },

            imposedLoadOnAreaOfInfluence() {
                if(this.column.slabLoading && this.column.slabLoading.length)
                    return parseFloat((this.column.live_load * this.column.slabLoading[0].length/1000 * this.column.slabLoading[0].width/1000).toFixed(2));
            },

            areaOfSteel() {
                if(this.column.materialProperties && this.column.geometry)
                   return this.$_COLUMN.calculateAreaOfSteel(
                       this.calculateDesignLoading(),
                       this.column.materialProperties.fCu,
                       this.column.materialProperties.fY,
                       this.column.geometry.b,
                       this.column.geometry.d,
                   ).toFixed(2);
            }
        }
    }
</script>

<style scoped>

</style>
