import React from "react";
import {NavLink} from "react-router-dom";
import {navigationLinks} from "../../service/apiConst";


export const Navigation = () => {
    return (
        <main>
            { navigationLinks.map( ( item ) => (
                <React.Fragment key={ item.path }>
                    <NavLink to={ item.path }>
                        <button button style={ {display: 'inline'} } key={ item.label }>
                            { item.label }
                        </button>
                    </NavLink>
                </React.Fragment>
            ) ) }
        </main>
    )
}
