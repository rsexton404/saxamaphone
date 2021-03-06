import React, {PropTypes} from 'react'
import classNames from 'classnames'

const MOBILE_BREAKPOINT = 'mobile'
const TABLET_BREAKPOINT = 'tablet'
const DESKTOP_BREAKPOINT = 'desktop'
const MOBILE_COLUMN_COUNT = 4
const TABLET_COLUMN_COUNT = 8
const DESKTOP_COLUMN_COUNT = 12

const generateModifiers = (props) => {
    const classes = {}
    const breakpoints = [MOBILE_BREAKPOINT, TABLET_BREAKPOINT, DESKTOP_BREAKPOINT]
    const columns = [MOBILE_COLUMN_COUNT, TABLET_COLUMN_COUNT, DESKTOP_COLUMN_COUNT]

    breakpoints.forEach((currentBreakpoint, i) => {
        const breakpointProps = props[currentBreakpoint]
        const maxColumnsForThisBreakpoint = columns[i]

        // Generate a span modifier class equal to the `span` prop. Can't be
        // larger than the `maxColumnsForThisBreakpoint`
        if (breakpointProps && breakpointProps.span <= maxColumnsForThisBreakpoint && breakpointProps.span !== null) {
            classes[`c--span-${breakpointProps.span}@${currentBreakpoint}`] = true
        }

        // Generate full width modifier class for where there is no `span` prop,
        // or if the span value is larger than the `maxColumnsForThisBreakpoint`
        if (!breakpointProps || breakpointProps.span > maxColumnsForThisBreakpoint || !breakpointProps.span) {
            classes[`c--full-width@${currentBreakpoint}`] = true
        }

        // Generate a pre modifier class equal to the `pre` prop. Must be less
        // than the `maxColumnsForThisBreakpoint`
        if (breakpointProps && breakpointProps.pre && breakpointProps.pre < maxColumnsForThisBreakpoint) {
            classes[`c--pre-${breakpointProps.pre}@${currentBreakpoint}`] = true
        }

        // Generate a pre modifier class equal to the `post` prop. Must be less
        // than the `maxColumnsForThisBreakpoint`
        if (breakpointProps && breakpointProps.post && breakpointProps.post < maxColumnsForThisBreakpoint) {
            classes[`c--post-${breakpointProps.post}@${currentBreakpoint}`] = true
        }
    })

    return classes
}


/**
 * GridSpan the grid component that does much of the heavy lifting. It is where
 * all the grid layout behavior for all the breakpoints is defined.
 *
 * Our grid framework of choice is [Susy](http://susydocs.oddbird.net/en/latest/)
 * and all of Grid's and GridSpan's behaviors are defined with the Susy mixins.
 */
const GridSpan = (props) => {
    const classes = classNames('c-grid__span', {
        ...generateModifiers(props),
    }, props.className)

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

const breakpointShape = {
    span: PropTypes.number,
    pre: PropTypes.number,
    post: PropTypes.number,
}

GridSpan.propTypes = {
    /**
     * Any children to be nested within this ProductItem
     */
    children: PropTypes.node,

    /**
     * Adds values to the `class` attribute of the root element
     */
    className: PropTypes.string,

    /**
     * Accepts an object shape that defines the `GridSpan`'s behavior at the
     * **desktop** breakpoint. See the below Breakpoint Modifiers section for
     * details about defining the breakpoint behaviors. The actual media query
     * breakpoint is defined in the component's CSS.
     */
    desktop: PropTypes.shape(breakpointShape),

    /**
     * Accepts an object shape that defines the `GridSpan`'s behavior at the
     * **mobile** breakpoint. See the below Breakpoint Modifiers section for
     * details about defining the breakpoint behaviors. The actual media query
     * breakpoint is defined in the component's CSS.
     */
    mobile: PropTypes.shape(breakpointShape),

    /**
     * Accepts an object shape that defines the `GridSpan`'s behavior at the
     * **tablet** breakpoint. See the below Breakpoint Modifiers section for
     * details about defining the breakpoint behaviors. The actual media query
     * breakpoint is defined in the component's CSS.
     */
    tablet: PropTypes.shape(breakpointShape),
}

export {GridSpan as default, MOBILE_BREAKPOINT, TABLET_BREAKPOINT, DESKTOP_BREAKPOINT, MOBILE_COLUMN_COUNT, TABLET_COLUMN_COUNT, DESKTOP_COLUMN_COUNT}
