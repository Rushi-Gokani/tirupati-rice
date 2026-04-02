declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.svg' {
    const value: string;
    export default value;
}
declare module '*.jpg' {
    const value: string;
    export default value;
}
declare module '*.jpg.jpeg' {
    const value: string;
    export default value;
}
declare module '*.jpeg' {
    const value: string;
    export default value;
}
declare module 'react-simple-maps' {
    import React from 'react';

    export interface ComposableMapProps {
        projection?: string;
        projectionConfig?: {
            scale?: number;
            center?: [number, number];
            rotate?: [number, number, number];
        };
        width?: number;
        height?: number;
        style?: React.CSSProperties;
        children?: React.ReactNode;
    }

    export interface GeographiesProps {
        geography: string | object;
        children: (data: { geographies: any[] }) => React.ReactNode;
    }

    export interface GeographyProps {
        geography: any;
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
        style?: {
            default?: React.CSSProperties & { outline?: string };
            hover?: React.CSSProperties & { outline?: string };
            pressed?: React.CSSProperties & { outline?: string };
        };
        [key: string]: any;
    }

    export interface MarkerProps {
        coordinates: [number, number];
        children?: React.ReactNode;
        [key: string]: any;
    }

    export const ComposableMap: React.FC<ComposableMapProps>;
    export const Geographies: React.FC<GeographiesProps>;
    export const Geography: React.FC<GeographyProps>;
    export const Marker: React.FC<MarkerProps>;
    export const ZoomableGroup: React.FC<any>;
    export const Line: React.FC<any>;
    export const Sphere: React.FC<any>;
    export const Graticule: React.FC<any>;
}

