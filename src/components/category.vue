<template>
	<div class="col-sm-3">
					<div class="left-sidebar">
						<h2>Category</h2>
						<div v-for="category in categories" class="panel-group category-products" id="accordian"><!--category-products-->
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
											<span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                            {{category.name}}
										</a>
									</h4>
								</div>
								<div id="sportswear" class="panel-collapse collapse">
									<div class="panel-body">
										<ul>
											<li v-for="lower in category.lowers"><a href="#">{{lower}} </a></li>
										</ul>
									</div>
								</div>
							</div>
                        </div>
                    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    name: 'smthng',
                    lowers: ['smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng','smthng','smthng','smthng','smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng']
                },
                {
                    name: 'smthng',
                    lowers: ['smthng']
                }
            ]
        }
    },
}
</script>

<style lang="">
    
</style>