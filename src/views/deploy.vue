<template>
	<div class="app-container home" style="padding: 0;margin: 0;">
		<div class="div-layout">
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
			<el-row :gutter="30">
				<el-col :span="16" style="padding-left: 50px;padding-top: 50px;">
					<el-row>
						<el-row>
							<el-row>
								<div class="big_title" style="font-size: 20px;float:left;color: white;">
									<el-row>
										<span style="text-shadow: .3rem 0 0.3rem #00d8ff;">模型列表</span>
									</el-row>
									<el-row style="padding-bottom: 20px;padding-top: 0px;">
										<el-col span="4">
											<img src="../assets/images/line1.png" style="width: 110%;padding-bottom: 5px;" />
										</el-col>
										<el-col span="20">
											<img src="../assets/images/line2.png" style="width: 100%;padding-bottom: 5px;"/>
										</el-col>
									</el-row>
								</div>
							</el-row>
						</el-row>
						<el-row>
							<!-- :cell-style="{borderColor:'#3d4e52'}" -->
							<div class=".regional_table">
								<el-table
								:cell-style="{borderColor:'#3d4e52'}"
								v-loading="loading" :data="tabledata2" @selection-change="handleSelectionChange"
								:header-cell-style="{color: '#ffffff', fontSize: '14px', backgroundColor: 'rgba(7, 55, 77, 1.0)',borderColor:'#3d4e52'}">
								>
								  <el-table-column label="模型名称" align="center" prop="name" />
								  <el-table-column label="测试集" align="center" prop="content" />
								  <el-table-column label="Precision" align="center" prop="status" />
								  <el-table-column label="Recall" align="center" prop="data" />
								  <el-table-column label="Accuracy" align="center" prop="data" />
								  <el-table-column label="检测速度" align="center" prop="data" />
								  <el-table-column label="操作" align="center" class-name="small-padding fixed-width" >
								    <template slot-scope="scope" >
								      <el-button
								        size="mini"
								        type="text"
								        icon="el-icon-edit"
								        @click="handleUpdate(scope.row)"
								  		style="color: #55ffff;"
										
								      >详情</el-button>
								      <el-button
								        size="mini"
								        type="text"
								        icon="el-icon-delete"
								        @click="handleDelete(scope.row)"
								  									style="color: #ffffff;"
								      >删除</el-button>
								    </template>
								  </el-table-column>
								</el-table>
							</div>
						</el-row>
					</el-row>
					<el-row style="padding-top: 40px;">
						<el-row>
							<div class="big_title" style="font-size: 20px;float:left;color: white;">
								<el-row>
									<span style="text-shadow: .3rem 0 0.3rem #00d8ff;">正运行服务</span>
								</el-row>
								<el-row style="padding-bottom: 20px;padding-top: 0px;">
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
							<div class="">
								<el-row  style="display: flex;flex-direction: row;color:white;padding-left: 60px;padding-top: 30px;">
									<el-col :span="4">
										<span style="font-weight: 550;font-size: 18px;">模型名称：</span>
									</el-col>
									<el-col :span="8">
										<span style="font-weight: 550;font-size: 18px;">"图安"异常检测模型</span>
									</el-col>
									
									<el-col :span="4" style="padding-left: ;">
										<span style="font-weight: 550;font-size: 18px;">服务累计运行：</span>
									</el-col>
									<el-col :span="8">
										<span style="font-weight: 550;font-size: 18px;"n> 0时0分20秒</span>
									</el-col>
								</el-row>
							</div>
							
						</el-row>
						<el-row>
							<div class="">
								<el-row  style="display: flex;flex-direction: row;color:white;padding-left: 60px;padding-top: 30px;">
									<el-col :span="4">
										<span style="font-weight: 550;font-size: 18px;">部署时间：</span>
									</el-col>
									<el-col :span="8">
										<span style="font-weight: 550;font-size: 18px;">2023-04-02 </span>
									</el-col>
									
									<el-col :span="4" style="padding-left: ;">
										<span style="font-weight: 550;font-size: 18px;">检测图片数：</span>
									</el-col>
									<el-col :span="8">
										<span style="font-weight: 550;font-size: 18px;"n> 0</span>
									</el-col>
								</el-row>
							</div>
							
						</el-row>
						
					</el-row>
				</el-col>
				<el-col :span="8" style="padding-top: 50px;padding-right: 30px;height: 700px;" >
					<el-row class="div1" style="height: 100%;width: 400px;">
						<el-row style="font-size: 16px;float:left;color: white;padding-top: 20px;padding-left: 10px;padding-right: 10px;">
							<span style="text-shadow: .3rem 0 0.3rem #00d8ff;padding-left: 140px;font-size: 19px;">模型部署</span>
							<div style="padding-top: 20px;zoom: 0.9;">
								<el-form ref="form" :model="form" :rules="rules" label-width="30px" style="padding-left: 0;">
								  <el-form-item prop="name">
									  <span style="font-size: 16px;">可部署模型</span>
								    <el-input v-model="form.name" placeholder="请选择" step="width:50px"/>
								  </el-form-item>
								  <el-form-item prop="content">
								  	<span style="font-size: 16px;">部署对象</span>
								    <el-input v-model="form.content" placeholder="请选择" />
								  </el-form-item>
								  
								  
								  
								  
								  
								  <el-form-item prop="type">
									  <router-link to="/assessdetail">
										  <el-button type="primary" @click="submitForm">一键部署</el-button>
									  </router-link>
								  	
								  	<el-button @click="cancel">取 消</el-button>
								  </el-form-item>
								  
								  
								</el-form>
							</div>
							
						</el-row>
					</el-row>
				</el-col>
			</el-row>
			
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				form:{
					name:'',
					content:'',
					source:'',
					type:'',
				},
				//存放上传文件
				fileList: [],
				tabledata1:[
					{
						name:'数据集1',
						content:'初始数据集',
						status:'正常',
						percent:'200/200',
						tag:'fire,smoke,...'
					},
					{
						name:'数据集2',
						content:'新增数据集',
						status:'正常',
						percent:'200/200',
						tag:'fire,smoke,...'
					},
					{
						name:'数据集3',
						content:'新增数据集',
						status:'正常',
						percent:'200/200',
						tag:'fire,smoke,...'
					},
					{
						name:'数据集4',
						content:'新增数据集',
						status:'正常',
						percent:'200/200',
						tag:'fire,smoke,...'
					}
				],
				tabledata2:[
					{
						name:'模型训练1',
						content:'异常行为检测',
						status:'正常',
						data:'数据集1',
					},
					{
						name:'模型训练2',
						content:'物体检测',
						status:'正常',
						data:'数据集2',
					},
					// {
					// 	name:'',
					// 	content:'',
					// 	status:'',
					// 	data:'',
					// },
				],
			}
		},
		methods: {
				// 覆盖默认的上传行为，可以自定义上传的实现，将上传的文件依次添加到fileList数组中,支持多个文件
			      httpRequest(option) {
			        this.fileList.push(option)
			      },
			      // 上传前处理
			      beforeUpload(file) {
			        let fileSize = file.size
			        const FIVE_M= 5*1024*1024;
			        //大于5M，不允许上传
			        if(fileSize>FIVE_M){
			          this.$message.error("最大上传5M")
			          return  false
			        }
			        //判断文件类型，必须是xlsx格式
			        let fileName = file.name
			        let reg = /^.+(\.xlsx)$/
			        if(!reg.test(fileName)){
			          this.$message.error("只能上传xlsx!")
			          return false
			        }
			        return true
			      },
			      // 文件数量过多时提醒
			      handleExceed() {
			        this.$message({ type: 'error', message: '最多支持1个附件上传' })
			      },
			      //导入Excel病种信息数据
			      submitImportForm() {
			        // 使用form表单的数据格式
			        const params = new FormData()
			        // 将上传文件数组依次添加到参数paramsData中
			        this.fileList.forEach((x) => {
			          paramsData.append('file', x.file)
			        });
			        // 将输入表单数据添加到params表单中
			        params.append('kgCode', this.importForm.kgCode)
			        params.append('targetUrl', this.importForm.targetUrl)
			        params.append('targetUsername', this.importForm.targetUsername)
			        params.append('targetPassword', this.importForm.targetPassword)
					
					//这里根据自己封装的axios来进行调用后端接口
			        this.httpPostWithLoading(IMPORT_URL,paramsData).then(match => {
			          if (match.success) {
			            this.$message({
			              message: "导入成功",
			              type: "success"
			            })
			          }else{
			            this.$message({
			              message: "导入失败",
			              type: "error"
			            })
			          }
			          this.$refs.importFormRef.resetFields()//清除表单信息
			          this.$refs.upload.clearFiles()//清空上传列表
			          this.fileList = []//集合清空
			          this.dialogVisible1 = false//关闭对话框
			
			        })
			      }

		},
	}
</script>

<style lang="scss">

	.div1{
		
		background: url(../assets/images/kuang2.png) no-repeat;
		background-size: 95% 100%
		/* background-size:400px 668px; */
		/* padding-top: 10px; */
		/* width: 520px;
		height: 300px; */
		/* zoom:1.1 */
	}
	.div-layout{
		height: 900px;
		background-image: url(../assets/images/bg09.jpg) ;
		background-size: 1370px 900px;
	}
	
	/*最外层透明*/
	.regional_table ::v-deep .el-table,
	.regional_table ::v-deep .el-table__expanded-cell {
	  background-color: transparent;
	  color: white;
	}
	/* 表格内背景颜色 */
	.regional_table ::v-deep .el-table th,
	.regional_table ::v-deep .el-table tr,
	.regional_table ::v-deep .el-table td {
	  background-color: transparent !important;
	  color: white;
	}
	
	/*最外层透明*/
	.el-table, .el-table__expanded-cell{
	    background-color: transparent;
	}
	/* 表格内背景颜色 */
	.el-table th,
	.el-table tr,
	.el-table td {
		color: white;
	    background-color: transparent;
	}
	
	
	.el-table::before {
		 left: 0;
		 bottom: 0;
		 width: 100%;
		 height: 0px;
	}
	/* .el-table th, .el-table tr {
		color: white;
	    background-color: transparent;
	} */
	
	
	.el-textarea__inner,.el-input__inner {
	    background: transparent !important;
	}
	
	// .el-upload{
	// 	background: transparent !important;
	// }
	
	.upload-demo::v-deep .el-upload,.el-upload--text{
		background: transparent !important;
		
	}
	
	
	.upload-demo ::v-deep .el-upload--picture-card{
	  margin-top: 4%;
	  height:80px;
	  width:80px;
	  line-height: 80px;
	}
	.upload-demo ::v-deep .el-upload-list--picture-card .el-upload-list__item{
	  margin-top: 4%;
	  height:80px;
	  width:80px;
	  line-height: 80px;
	}
	
	

</style>
