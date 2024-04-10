<template>
  <div class="app-container home" style="padding: 0;margin: 0;">
	
    <div  class="div-layout" >
		<el-row >
			<el-col :span="8" style="color: white;font-size: 16px;font-weight: 350;padding-top: 40px;">
				<el-row style="padding-left: 80px;">
					<router-link to="/index">
						<el-col :span="4">
							首页
						</el-col>
					</router-link>
					<router-link to="/data">
						<el-col :span="7">
							数据集管理
						</el-col>
					</router-link>
					<router-link to="/train">
						<el-col :span="6">
							模型训练
						</el-col>
					</router-link>
				</el-row>
			</el-col>
			<el-col :span="8" style="color: white;padding-top: 25px;padding-left: 120px;">
				<span style="text-shadow: 0 0 0.3rem #00d8ff;font-size: 32px;font-weight: 550; letter-spacing: 10px;">模型管理平台</span>
				<!-- <h1 style="text-shadow: 0 0 0.3rem #00d8ff;">模型管理平台</h1> -->
			</el-col>
			<el-col :span="8" style="color: white;font-size: 16px;font-weight: 350;padding-top: 40px;">
				<el-row style="padding-left: 150px;">
					<router-link to="/assess">
						<el-col :span="8">
							模型评估
						</el-col>
					</router-link>
					<router-link to="/deploy">
						<el-col :span="8">
							模型部署
						</el-col>
					</router-link>
				</el-row>
			</el-col>
		</el-row>
		
    	<el-row :gutter="30" style="padding-top: 60px;padding-left: 30px;padding-right: 30px;">
    		<el-col :span="6" style="text-align: center;font-size: 18px;color: white;">
    			<el-row>
					<div class="mx1" style="width: 300px;height: 200px;"></div>
    			</el-row>
    			<el-row style="padding-top: 15px;">
    				<span>数据集管理</span>
    			</el-row>
    		</el-col>
    		<el-col :span="6" style="text-align: center;font-size: 18px;color: white;">
    			<el-row>
    				<div class="mx2" style="width: 300px;height: 200px;"></div>
    			</el-row>
    			<el-row style="padding-top: 15px;">
    				<span>模型训练</span>
    			</el-row>
    		</el-col>
    		
    		<el-col :span="6" style="text-align: center;font-size: 18px;color: white;">
    			<el-row>
    				<div class="mx3" style="width: 300px;height: 200px;"></div>
    			</el-row>
    			<el-row style="padding-top: 15px;">
    				<span>模型评估</span>
    			</el-row>
    		</el-col>
    		
    		<el-col :span="6" style="text-align: center;font-size: 18px;color: white;">
    			<el-row>
    				<div class="mx4" style="width: 300px;height: 200px;"></div>
    			</el-row>
    			<el-row style="padding-top: 15px;">
    				<span>模型部署</span>
    			</el-row>
    		</el-col>
    	</el-row>
		
    	<el-row gutter="30" style="padding-top: 30px;padding-left: 30px;padding-right: 30px;">
    		<el-col :span="12">
				<div class="div1" style="padding-bottom: 20px;">
					<el-row style="padding-top: 20px;padding-left: 20px;padding-right: 20px;">
						<div class="big_title" style="font-size: 20px;float:left;color: white;">
							<el-row>
								<span style="text-shadow: .3rem 0 0.3rem #00d8ff;">训练列表</span>
							</el-row>
							<el-row style="padding-top: 0px;">
								<el-col span="4">
									<img src="../assets/images/line1.png" style="width: 110%;padding-bottom: 5px;" />
								</el-col>
								<el-col span="20">
									<img src="../assets/images/line2.png" style="width: 100%;padding-bottom: 5px;"/>
								</el-col>
							</el-row>
						</div>
					</el-row>
					<el-row>
						<div class="divtable" style="zoom:1.1;padding-left: 10px;">
							<el-table
							class="customer-no-border-table"
								stripe=""
							      :data="tableData1"
							      style="width:100%;padding-top: 8px;text-align: center;height:100%;"
								  :header-cell-style="{color: 'white', fontSize: '15px', backgroundColor: '#033353',height:'60px'}">
							      <el-table-column
							        prop="trainname"
							        label="训练名称"
							        width="160"
									align="center">
							      </el-table-column>
							      <el-table-column
							        prop="modelname"
							        label="模型名称"
							        width="140"
									align="center">
							      </el-table-column>
							      <el-table-column
							        prop="dataname"
							        label="数据集名称"
									width="150"
									align="center">
							      </el-table-column>
								  <el-table-column
								    prop="status"
									label="运行状态"
									width="110"
									align="center">
								  </el-table-column>
							    </el-table>
						</div>
					</el-row>
					
				</div>
    			
    			
    			
    	
    			
    		</el-col>
    		<el-col :span="12">
				<div class="div1" style="padding-bottom: 20px;">
					<el-row style="padding-top: 20px;padding-left: 20px;padding-right: 20px;">
						<div class="big_title" style="font-size: 20px;float:left;color: white;">
							<el-row>
								<span style="text-shadow: .3rem 0 0.3rem #00d8ff;">服务列表</span>
							</el-row>
							<el-row style="padding-bottom: 10px;padding-top: 0px;">
								<el-col span="4">
									<img src="../assets/images/line1.png" style="width: 110%;padding-bottom: 5px;" />
								</el-col>
								<el-col span="20">
									<img src="../assets/images/line2.png" style="width: 100%;padding-bottom: 5px;"/>
								</el-col>
							</el-row>
						</div>
					</el-row>
					<el-row>
						<div class="divtable" style="zoom:1.1;padding-left: 10px;">
							<el-table
							class="customer-no-border-table"
							      :data="tableData2"
								  :row-style="{height: '43px'}"
							      style="width: 100%;height: 100%;padding-top: 0px;;padding-right: 10px;text-align: center;"
								  :header-cell-style="{color: 'white', fontSize: '15px', backgroundColor: '#033353',height:'60px'}">
							      <el-table-column
							        prop="servename"
							        label="服务名称"
							        width="180"
									align="center"
									>
							      </el-table-column>
							      <el-table-column
							        prop="operation"
							        label="累计运行"
							        width="90"
									align="center">
							      </el-table-column>
							      <el-table-column
							        prop="status"
							        label="服务状态"
									width="120"
									align="center">
							      </el-table-column>
								  <el-table-column
								    prop="time"
									label="创建时间"
									width="170"
									align="center">
								  </el-table-column>
							    </el-table>
						</div>
					</el-row>
					
				</div>
    			
    			
    		</el-col>
    	</el-row>
    </div>
    

  </div>
</template>

<script>
import {Navbar} from '../layout/components/Navbar.vue'
export default {
  name: "index",
  components: {
    Navbar,
  },
  data() {
    return {
      // 版本号
      version: "3.4.0",
	  tableData1: [{
	  	            trainname: '异常行为检测',
	  	            modelname: '模型1',
	  	            dataname: '数据集1',
	  				status:'正常结束'
	  	          },
	  			  {
	  			              trainname: '异常行为检测',
	  			              modelname: '模型1',
	  			              dataname: '数据集1',
	  			  			status:'正常结束'
	  			            },
	  			{
	  			            trainname: '异常行为检测',
	  			            modelname: '模型1',
	  			            dataname: '数据集1',
	  						status:'正常结束'
	  			          },
	  			{
	  			            trainname: '异常行为检测',
	  			            modelname: '模型1',
	  			            dataname: '数据集1',
	  						status:'正常结束'
	  			          },
	  			{
	  			            trainname: '异常行为检测',
	  			            modelname: '模型1',
	  			            dataname: '数据集1',
	  						status:'正常结束'
	  			          },
	  			],
	  			tableData2: [{
	  			            servename: '图安校园安防',
	  			            operation: '2天',
	  			            status: '正常运行',
	  						time:'2023-04-02 11:22:12'
	  			          },
	  					  {
	  					              servename: '',
	  					              operation: '',
	  					              status: '',
	  					  			time:''
	  					            },
	  					{
	  					            servename: '',
	  					            operation: '',
	  					            status: '',
	  								time:''
	  					          },
	  							  
	  						{
	  						            servename: '',
	  						            operation: '',
	  						            status: '',
	  									time:''
	  						          },
	  						{
	  						            servename: '',
	  						            operation: '',
	  						            status: '',
	  									time:''
	  						          },			
	  					],
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
	
	
	// .mx1{
	// 	background: url(../assets/images/mx1.png) no-repeat;
	// 	background-size: 100% 100%;
	// }
	



.el-table, .el-table__expanded-cell {
	    background-color: transparent;
	}
	.el-table::before {
		 left: 0;
		 bottom: 0;
		 width: 100%;
		 height: 0px;
	}
	.el-table th, .el-table tr {
		color: white;
	    background-color: transparent;
	}
	.div-layout{
		height: 900px;
		background-image: url(../assets/images/bg09.jpg) ;
		
		background-size: 1370px 900px;
	}
	.div1{
		// background-image: url(../assets/images/kuang.png) no-repeat;
		background: url(../assets/images/kuang.png) no-repeat;
		// background: url(../assets/images/mx1.png) no-repeat;
		background-size: 100% 100%;
		/* padding-top: 10px; */
		/* width: 520px;
		height: 300px; */
	}
	.mx1{
		// background-image: url(../assets/images/kuang.png) no-repeat;
		// background: url(../assets/images/kuang.png) no-repeat;
		background: url(../assets/images/mx1.png) no-repeat;
		background-size: 100% 100%;
		/* padding-top: 10px; */
		/* width: 520px;
		height: 300px; */
	}
	.mx2{
		// background-image: url(../assets/images/kuang.png) no-repeat;
		// background: url(../assets/images/kuang.png) no-repeat;
		background: url(../assets/images/mx2.png) no-repeat;
		background-size: 100% 100%;
		/* padding-top: 10px; */
		/* width: 520px;
		height: 300px; */
	}
	.mx3{
		// background-image: url(../assets/images/kuang.png) no-repeat;
		// background: url(../assets/images/kuang.png) no-repeat;
		background: url(../assets/images/mx3.png) no-repeat;
		background-size: 100% 100%;
		/* padding-top: 10px; */
		/* width: 520px;
		height: 300px; */
	}
	.mx4{
		// background-image: url(../assets/images/kuang.png) no-repeat;
		// background: url(../assets/images/kuang.png) no-repeat;
		background: url(../assets/images/mx5.png) no-repeat;
		background-size: 100% 100%;
		/* padding-top: 10px; */
		/* width: 520px;
		height: 300px; */
	}
	
	
	


.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}



</style>

