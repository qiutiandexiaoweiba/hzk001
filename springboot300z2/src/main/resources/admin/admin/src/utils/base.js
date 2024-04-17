const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot300z2/",
            name: "springboot300z2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot300z2/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网红商品个性化推荐系统"
        } 
    }
}
export default base
