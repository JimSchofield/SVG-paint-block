import SVGCanvas from './components/SVGCanvas';
import getSVGPath from './getSVGPath';

const { registerBlockType } = wp.blocks;

const { RichText, InspectorControls, ColorPalette } = wp.editor;

registerBlockType('svg-paint-block/block', {
    title: 'SVG Paint Block',
    icon: 'admin-customizer',
    category: 'common',

    attributes: {
        backgroundColor: {
            type: String,
            default: 'blue',
        },
        strokeList: {
            type: Array,
            default: [],
        },
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { backgroundColorStroke, strokeList } = props.attributes;

        function addStroke(stroke) {
            setAttributes({
                strokeList: [...strokeList, stroke],
            });
        }

        return [
            <InspectorControls>
                <div
                    style={{
                        padding: '1em 0',
                    }}
                >
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                <SVGCanvas addStroke={addStroke} strokeList={strokeList} />
            </div>,
        ];
    },

    save(props) {
        const { className } = props;
        const { backgroundColor, strokeList } = props.attributes;

        return (
            <div
                style={{
                    width: '300px',
                    height: '300px',
                }}
            >
                <svg
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: '100%',
                        height: '100%',
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '10',
                    }}
                >
                    {strokeList.length > 0 &&
                        strokeList.map(stroke => {
                            return <path d={getSVGPath(stroke)} />;
                        })}
                </svg>
            </div>
        );
    },
});
