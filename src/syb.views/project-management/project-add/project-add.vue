<template>
    <Tabs>
        <TabPane label="乐商贷" name="name1">
            <Form ref="formDatas" :model="formDatas" label-position="top" class="form-add">
                <Row>
                    <Col span="4">
                        <FormItem label="项目编号">
                            <Input class="p20"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="项目名称">
                            <Input class="p20"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="项目期限">
                            <Select class="p20">
                                <Option>111</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="4">
                        <FormItem label="项目编号">
                            <Input class="p20"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="项目名称">
                            <Input class="p20"></Input>
                        </FormItem>
                    </Col>
                    <Col span="4">
                        <FormItem label="项目期限">
                            <Input class="p20"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="项目简介">
                            <Input type="textarea" :rows="4" class="p20"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="经营负责人信息">
                    <Row>
                        <Col span="3">
                            <Input placeholder="负责人姓名" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="负责人身份证号" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="手机号码" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Upload>
                                <Button type="ghost" icon="ios-cloud-upload-outline" class="upload">上传文件</Button>
                            </Upload>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="添加必要保证人">
                    <Row>
                        <Col span="3">
                            <Input placeholder="必要保证人姓名" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="必要保证人身份证号" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="手机号码" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Upload>
                                <Button type="ghost" icon="ios-cloud-upload-outline" class="upload">上传文件</Button>
                            </Upload>
                            <Button type="text" class="fc">+继续添加必要保证人</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="添加房产保证人">
                    <Row>
                        <Col span="3">
                            <Input placeholder="房产保证人姓名" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="房产保证人身份证号" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="手机号码" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Upload>
                                <Button type="ghost" icon="ios-cloud-upload-outline" class="upload">上传文件</Button>
                            </Upload>
                            <Button type="text" class="fc">+继续添加房产保证人</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="添加一般保证人">
                    <Row>
                        <Col span="3">
                            <Input placeholder="一般保证人姓名" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="一般保证人身份证号" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Input placeholder="手机号码" class="p20"></Input>
                        </Col>
                        <Col span="3">
                            <Upload>
                                <Button type="ghost" icon="ios-cloud-upload-outline" class="upload">上传文件</Button>
                            </Upload>
                            <Button type="text" class="fc">+继续添加一般保证人</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Button type="primary">保存项目信息</Button>
                </FormItem>
            </Form>
        </TabPane>
        <TabPane label="个体贷" name="name2">标签二的内容</TabPane>
    </Tabs>
</template>

<script>
    export default {
        name: "project-add",
        data(){
            return {
                formDatas:{

                }
            }
        }
    }
</script>

<style scoped>
    .form-add{
        margin-left: 50px;
    }
    .p20{
        padding-right: 20px;
    }
    .upload{
        background-color: #fff;
    }
    .fc{
        color: #5cadff;
    }
</style>
