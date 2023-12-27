import {
    Database,
    HelpCircle,
    LayoutGrid,
    LayoutPanelTop,
    MessageSquareWarning,
    PlayCircle
} from "lucide-react";

export const topItemsSidebar = [
    {
        "title": "My Projects",
        "icon": <Database />,
        "href": "/"
    },
    {
        "title": "Sample Projects",
        "icon": <LayoutGrid />,
        "href": "/sampleprojects"
    },
    {
        "title": "Apps",
        "icon": <LayoutPanelTop />,
        "href": "/apps"
    },
    {
        "title": "Intro to Necleo",
        "icon": <PlayCircle />,
        "href": "/intro"
    }
]


export const bottomItemsSidebar = [
    {
        "title": "Help & Support",
        "icon": <HelpCircle/>,
        "href": "/support"
    },
    {
        "title": "Feedback",
        "icon": <MessageSquareWarning />,
        "href": "/feedback"
    }
]