import {NavLink} from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {

    const isActive = (path, match, location) => !!(match || path === location.pathname);

    return (
        <header className={classes['header']}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            activeClassName={classes.active}
                            to='/cocomo1'
                            isActive={isActive.bind(null, '/cocomo1')}
                        >
                            COCOMO I
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={classes.active}
                            to='/cocomo2'
                            isActive={isActive.bind(null, '/cocomo2')}
                        >
                            COCOMO II
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={classes.active}
                            to='/func_points'
                            isActive={isActive.bind(null, '/func_points')}
                        >
                            Functional Points
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;