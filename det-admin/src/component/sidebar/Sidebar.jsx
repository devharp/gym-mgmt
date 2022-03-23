import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PagesIcon from '@mui/icons-material/Pages';

import './Sidebar.css'

function Sidebar() {
    const style = {
        height: '100%',
        width: '30%',
        minWidth: '250px',
        maxWidth: '400px',
        backgroundColor: '#121828',
        color: 'white',
    }
    const sideItemStyle = {
        
        
    }
    return (
        <div className='full-hw' style={{ zIndex: '1', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <div className="p-5" style={style}>
                <div>
                    <div className='sidebar-item sidebar-item-active'><DashboardCustomizeIcon />&nbsp;Dashboard</div>
                    <div className='sidebar-item sidebar-item-inactive'><PagesIcon />&nbsp;Pages</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;