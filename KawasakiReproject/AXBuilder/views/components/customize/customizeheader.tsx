/// <reference path="../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../js/interfaces/interfaces.d.ts" />

export class CustomizeHeader extends React.Component<IAXCustomizeTab, any> {
	render() {

		var { Categories } = this.props;

		return (
			<ul id="categoryContainer" className="tabs inline-list">
				<li id="packages">ACCESSORIES PACKAGES</li>

				{
					Categories.map((axcategory, index) => {

						let specialDataAttr = "cat_" + axcategory.AccessoryCategoryID;

						return (
							<li id={axcategory.CategoryName.toLowerCase()} key={index}
								data-special={specialDataAttr} className="category-tab">
								<h3>{axcategory.CategoryName} <i className="hide"></i></h3>
							</li>
						)
					})
				}

			</ul>
		)
	}
}