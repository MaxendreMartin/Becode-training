/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResponsiveControl from '../common/responsive.js';
import Icons from '../common/icons.js';

const { __ } = wp.i18n;

const { ButtonGroup, Dashicon, Tooltip, Button } = wp.components;

const { Component, Fragment } = wp.element;
class ItemComponent extends Component {
	constructor() {
		super( ...arguments );
		this.choices = ( kadenceCustomizerControlsData && kadenceCustomizerControlsData.choices && kadenceCustomizerControlsData.choices[ this.props.controlParams.group ] ? kadenceCustomizerControlsData.choices[ this.props.controlParams.group ] : [] );
	}
	render() {
		return (
			<div className="kadence-builder-item" data-id={ this.props.item } data-section={ undefined !== this.choices[ this.props.item ] && undefined !== this.choices[ this.props.item ].section ? this.choices[ this.props.item ].section : '' } key={ this.props.item }>
				<span
					className="kadence-builder-item-icon kadence-move-icon"
				>
					{ Icons['drag'] }
				</span>
				<span
					className="kadence-builder-item-text"
				>
					{ ( undefined !== this.choices[ this.props.item ] && undefined !== this.choices[ this.props.item ].name ? this.choices[ this.props.item ].name : '' ) }
				</span>
				<Button
					className="kadence-builder-item-focus-icon kadence-builder-item-icon"
					onClick={ () => {
						this.props.focusItem( undefined !== this.choices[ this.props.item ] && undefined !== this.choices[ this.props.item ].section ? this.choices[ this.props.item ].section : '' );
					} }
				>
					<Dashicon icon="admin-generic"/>
				</Button>
				<Button
					className="kadence-builder-item-icon"
					onClick={ () => {
						this.props.removeItem( this.props.item );
					} }
				>
					<Dashicon icon="no-alt"/>
				</Button>
			</div>
		);
	}
}
export default ItemComponent;
