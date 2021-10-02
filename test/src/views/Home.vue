<template>
    <div>
        <h1>Welcome to {{title}}!</h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
        </select>

        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d, i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    // 데이터 핸들링
    data() {
        return {
            title: "초코하우스",
            input1: "abc",
            options: [
                { v: "S", t: "Seoul" },
                { v: "J", t: "Jeju" },
                { v: "B", t: "Busan" },
            ],
            region: "J",
            tableShow: false,
        };
    },
    watch: {
        // 동일 데이터가 변경되었을 때 캐치 함 (중요!)
        input1(){
            console.log(this.input1);
        }
    },
    methods: {
        getData() {
            alert(this.input1); // two-way binding 
        },
        setData() {
            this.input1 = "12345";
        },
        changeRegion() {
            alert(this.region);
        }
    },
    // life cycle
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        // 생성되었을 때 db를 조회하고 바인딩 처리 -> 마운트 될때 적용
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
};
</script>