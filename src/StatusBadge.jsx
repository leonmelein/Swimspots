import Icon from '@mdi/react';
import { mdiAlert, mdiCheck, mdiCloseCircle } from '@mdi/js';

import './StatusBadge.css';

export function statusBadge(status) {
    switch (status) {
        case "goed":
            return <Icon size={2} path={mdiCheck} className="status-good" />

        case "NADER_ONDERZOEK":
            return <Icon size={2} path={mdiAlert} className="status-warning" />

        case "NEGATIEF_ZWEMADVIES":
            return <Icon size={2} path={mdiAlert} className="status-warning" />

        case "ZWEMVERBOD":
            return <Icon size={2} path={mdiCloseCircle} className="status-bad" />

        default:
            break;
    }
}