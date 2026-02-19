import React from 'react';
import { motion } from 'framer-motion';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO A3 codes for countries to highlight
const highlightedCountries = new Set([
    // Middle East
    'IRN', // Iran
    'ARE', // UAE (Dubai)
    'SAU', // Saudi Arabia
    'BHR', // Bahrain
    'YEM', // Yemen
    'IRQ', // Iraq
    'KWT', // Kuwait
    'OMN', // Oman
    'QAT', // Qatar
    'JOR', // Jordan
    'LBN', // Lebanon
    'SYR', // Syria
    'PSE', // Palestine

    // Europe
    'GBR', // United Kingdom
    'FRA', // France
    'DEU', // Germany
    'ITA', // Italy
    'ESP', // Spain
    'PRT', // Portugal
    'NLD', // Netherlands
    'BEL', // Belgium
    'CHE', // Switzerland
    'AUT', // Austria
    'POL', // Poland
    'CZE', // Czech Republic
    'SWE', // Sweden
    'NOR', // Norway
    'DNK', // Denmark
    'FIN', // Finland
    'GRC', // Greece
    'ROU', // Romania
    'BGR', // Bulgaria
    'HUN', // Hungary
    'SVK', // Slovakia
    'HRV', // Croatia
    'SRB', // Serbia
    'IRL', // Ireland
    'UKR', // Ukraine
]);

// Export location markers with coordinates [longitude, latitude]
const exportLocations = [
    { coordinates: [-1, 52] as [number, number], name: "UK" },
    { coordinates: [2, 47] as [number, number], name: "France" },
    { coordinates: [10, 51] as [number, number], name: "Germany" },
    { coordinates: [12, 42] as [number, number], name: "Italy" },
    { coordinates: [35, 39] as [number, number], name: "Turkey" },
    { coordinates: [45, 25] as [number, number], name: "Saudi Arabia" },
    { coordinates: [53, 32] as [number, number], name: "Iran" },
    { coordinates: [48, 15] as [number, number], name: "Yemen" },
    { coordinates: [54, 24] as [number, number], name: "UAE / Dubai" },
    { coordinates: [44, 33] as [number, number], name: "Iraq" },
    { coordinates: [57, 21] as [number, number], name: "Oman" },
    { coordinates: [31, 27] as [number, number], name: "Egypt" },
    { coordinates: [50, 26] as [number, number], name: "Bahrain" },
    { coordinates: [47, 29] as [number, number], name: "Kuwait" },
];

const WorldMap = () => {
    return (
        <div className="relative w-full h-full bg-[#005e2a] overflow-hidden flex items-center justify-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#004d23] via-[#005e2a] to-[#007035]" />

            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* World Map */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 120,
                        center: [40, 20],
                    }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const isoCode = geo.properties?.ISO_A3 || geo.id;
                                const isHighlighted = highlightedCountries.has(isoCode);

                                return (
                                    <Geography
                                        key={geo.rpiKey || geo.id}
                                        geography={geo}
                                        fill={isHighlighted ? '#FFD700' : 'rgba(255,255,255,0.85)'}
                                        stroke="rgba(0,94,42,0.4)"
                                        strokeWidth={0.5}
                                        style={{
                                            default: {
                                                outline: 'none',
                                                transition: 'fill 0.3s',
                                            },
                                            hover: {
                                                fill: isHighlighted ? '#FFC200' : 'rgba(255,255,255,1)',
                                                outline: 'none',
                                                cursor: 'pointer',
                                            },
                                            pressed: { outline: 'none' },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>

                    {/* Location Markers - Map Pin Icons */}
                    {exportLocations.map((loc, idx) => (
                        <Marker key={idx} coordinates={loc.coordinates}>
                            {/* Pulse ring */}
                            <motion.circle
                                r={6}
                                fill="rgba(139, 26, 26, 0.25)"
                                initial={{ r: 3, opacity: 0.6 }}
                                animate={{ r: [3, 10, 3], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.15 }}
                            />
                            {/* Map Pin Icon */}
                            <g transform="translate(-6, -16) scale(0.5)">
                                <path
                                    d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20C24 5.373 18.627 0 12 0z"
                                    fill="#8B1A1A"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <circle cx="12" cy="10" r="4" fill="white" fillOpacity="0.9" />
                            </g>
                            {/* Tooltip */}
                            <title>{loc.name}</title>
                        </Marker>
                    ))}
                </ComposableMap>
            </div>
        </div>
    );
};

export default WorldMap;
