/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../js/interfaces/interfaces.d.ts" />

export class CustomizeCatgoriesAccessories extends React.Component<IOnlyAXCategory, any> {
	render() {

		var {AllCategories} = this.props;

		return (

			<div className="product_list">
				{
					AllCategories.map((axcategory, index) => {

						let currentCategoryId = "cat_" + axcategory.AccessoryCategoryID;
						let categoryId = axcategory.AccessoryCategoryID;
						let clsName = axcategory.CategoryName + " acc-list " + (index != 0 ? "hide" : "");
						return (

							<div id={currentCategoryId} data-catid={categoryId} className={clsName}></div>

						)
					})
				}
			</div>
		)
	}
}