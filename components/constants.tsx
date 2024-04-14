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
        "title": "Generate",
        "icon": <Database />,
        "href": "/"
    },
    {
        "title": "Collection",
        "icon": <LayoutGrid />,
        "href": "/collection"
    },
    {
        "title": "Community",
        "icon": <LayoutPanelTop />,
        "href": "/community"
    },
    {
        "title": "Intro to Imangi",
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