/**
 * BLOCK: cp-aside-gutenberg-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register: A Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("com-cindypotvin/cp-aside-gutenberg-block", {
	title: "Aside Box",
	description: "Block showing a <aside> HTML element.",
	icon: "editor-justify",
	category: "formatting",
	// Attributs are similar to state in react, contains the current values of the block
	attributes: {
		content: {
			type: "array",
			source: "children",
			selector: ".cp-aside-gutenberg-block-content"
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: ({ attributes, setAttributes }) => {
		const updateContent = value => {
			setAttributes({ content: value });
		};

		return (
			<RichText
				tagName="aside"
				multiline="p"
				value={attributes.content}
				className="cp-aside-gutenberg-block-content"
				onChange={updateContent}
			/>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: props => {
		return (
			<RichText.Content
				tagName="aside"
				value={props.attributes.content}
				className="cp-aside-gutenberg-block-content"
			/>
		);
	}
});
