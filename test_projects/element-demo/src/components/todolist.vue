<template>
    <el-container>
        <el-header>TodoList</el-header>
        <el-main>
            <ul>
                <li v-for="(v,k) in listdata" :key="k"><el-checkbox v-model="v.b">{{v.a}}</el-checkbox></li>
            </ul>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button @click="add()">添加</el-button>
            <el-button @click="complete()">完成</el-button>
        </el-main>
        
    </el-container>
    
</template>
<script>
export default {
    name:"todolist",
    data(){
        return{
            input:'',
            listdata:[{a:"吃饭",b:false},{a:"睡觉",b:false},{a:"打豆豆",b:false}]
        }
    },
    methods:{
        add(){
            var x = {a:this.input,b:false}
           this.listdata.push(x)
        },
        complete(){
            for(var i = 0 ;i<this.listdata.length;i++){
                if(this.listdata[i].b==true){
                    this.listdata.splice(i,1)
                }
            }
        }
    }
};
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

</style>
