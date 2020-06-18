/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MathType from '@wiris/mathtype-ckeditor5';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	Heading,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	Indent,
	Italic,
	Link,
	List,
	MathType,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Subscript,
	Superscript,
	Table,
	TableToolbar,
	TextTransformation
];

export default Editor;

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'horizontalLine',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'|',
			'code',
			'codeBlock',
			'|',
			'MathType',
			'ChemType',
			'subscript',
			'superscript'
		]
	},
	language: 'en',
	image: {
		toolbar: [ 'imageTextAlternative', 'imageStyle:full', 'imageStyle:side' ]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	licenseKey: '',
	codeBlock: {
		languages: [
			{ language: 'html', label: 'Html', class: 'language-html' },
			{ language: 'xml', label: 'XML', class: 'language-xml' },
			{ language: 'svg', label: 'Svg', class: 'language-svg' },
			{ language: 'CSS', label: 'Css', class: 'language-css' },
			{
				language: 'JavaScript',
				label: 'JavaScript',
				class: 'language-js'
			},
			{ language: 'Bash', label: 'Bash', class: 'language-bash' },
			{ language: 'Shell', label: 'Shell', class: 'language-shell' },
			{ language: 'C', label: 'C', class: 'language-c' },
			{ language: 'CPP', label: 'C++', class: 'language-cpp' },
			{
				language: 'Docker',
				label: 'Dockerfile',
				class: 'language-docker'
			},
			{ language: 'Git', label: 'Git', class: 'language-git' },
			{ language: 'Java', label: 'Java', class: 'language-java' },
			{ language: 'JSON', label: 'Json', class: 'language-json' },
			{ language: 'LaTeX', label: 'LaTeX', class: 'language-latex' },
			{ language: 'Lua', label: 'LUA', class: 'language-lua' },
			{
				language: 'Makefile',
				label: 'Makefile',
				class: 'language-makefile'
			},
			{
				language: 'Markdown',
				label: 'Markdown',
				class: 'language-markdown'
			},
			{ language: 'nginx', label: 'NGinx', class: 'language-nginx' },
			{ language: 'Perl', label: 'Perl', class: 'language-perl' },
			{ language: 'PHP', label: 'PHP', class: 'language-php' },
			{ language: 'Python', label: 'Python', class: 'language-python' },
			{ language: 'R', label: 'R', class: 'language-r' },
			{ language: 'React JSX', label: 'ReactJs', class: 'language-jsx' },
			{
				language: 'React TSX',
				label: 'TypeScript',
				class: 'language-tsx'
			},
			{ language: 'Regex', label: 'Regex', class: 'language-regex' },
			{ language: 'SAS', label: 'SAS', class: 'language-sas' },
			{ language: 'XQuery', label: 'XQuery', class: 'language-xquery' },
			{ language: 'YAML', label: 'YAML', class: 'language-yaml' }
		]
	}
};
