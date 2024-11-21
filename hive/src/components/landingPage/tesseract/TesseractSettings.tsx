// src/components/Tesseract/TesseractSettings.tsx
import React from 'react';

interface TesseractSettingsProps {
    setLineThickness: React.Dispatch<React.SetStateAction<number>>;
    setLineOpacity: React.Dispatch<React.SetStateAction<number>>;
    setConnectorSize: React.Dispatch<React.SetStateAction<number>>;
    setMetallicFinish: React.Dispatch<React.SetStateAction<number>>;
    setRoughnessValue: React.Dispatch<React.SetStateAction<number>>;
    setGlassOpacity: React.Dispatch<React.SetStateAction<number>>;
    setShowGlassSurfaces: React.Dispatch<React.SetStateAction<boolean>>;
    setRotationSpeed: React.Dispatch<React.SetStateAction<number>>;
    setLineColor: React.Dispatch<React.SetStateAction<string>>;
    setConnectorColor: React.Dispatch<React.SetStateAction<string>>;
    setNodeColor: React.Dispatch<React.SetStateAction<string>>;
    setCameraPosition: React.Dispatch<React.SetStateAction<[number, number, number]>>;
    setCameraFov: React.Dispatch<React.SetStateAction<number>>;
    setBackground: React.Dispatch<React.SetStateAction<string>>;
    setAmbientLightIntensity: React.Dispatch<React.SetStateAction<number>>;
    setSpotlightSettings: React.Dispatch<React.SetStateAction<{
        position: [number, number, number];
        angle: number;
        penumbra: number;
        intensity: number;
        color: string;
        shadowMapSize: { width: number; height: number };
    }>>;
    setPointLightSettings: React.Dispatch<React.SetStateAction<{
        position: [number, number, number];
        intensity: number;
        color: string;
    }>>;
    setDirectionalLightSettings: React.Dispatch<React.SetStateAction<{
        position: [number, number, number];
        intensity: number;
        color: string;
        shadowMapSize: { width: number; height: number };
    }>>;
}

const TesseractSettings: React.FC<TesseractSettingsProps> = ({
    setLineThickness,
    setLineOpacity,
    setConnectorSize,
    setMetallicFinish,
    setRoughnessValue,
    setGlassOpacity,
    setShowGlassSurfaces,
    setRotationSpeed,
    setLineColor,
    setConnectorColor,
    setNodeColor,
    setCameraPosition,
    setCameraFov,
    setBackground,
    setAmbientLightIntensity,
    setSpotlightSettings,
    setPointLightSettings,
    setDirectionalLightSettings
}) => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h2 className="text-xl font-semibold col-span-full mb-4">Settings</h2>

            {/* Line Thickness */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Line Thickness</label>
                <input
                    type="range"
                    min="0.05"
                    max="1.0"
                    step="0.05"
                    defaultValue="0.2"
                    className="range-slider"
                    onChange={(e) => setLineThickness(parseFloat(e.target.value))}
                />
            </div>

            {/* Line Opacity */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Line Opacity</label>
                <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.1"
                    defaultValue="0.5"
                    className="range-slider"
                    onChange={(e) => setLineOpacity(parseFloat(e.target.value))}
                />
            </div>

            {/* Connector Size */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Connector Size</label>
                <input
                    type="range"
                    min="0.05"
                    max="0.5"
                    step="0.05"
                    defaultValue="0.1"
                    className="range-slider"
                    onChange={(e) => setConnectorSize(parseFloat(e.target.value))}
                />
            </div>

            {/* Metallic Finish */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Metallic Finish</label>
                <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.1"
                    defaultValue="0.5"
                    className="range-slider"
                    onChange={(e) => setMetallicFinish(parseFloat(e.target.value))}
                />
            </div>

            {/* Roughness Value */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Roughness Value</label>
                <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.1"
                    defaultValue="0.5"
                    className="range-slider"
                    onChange={(e) => setRoughnessValue(parseFloat(e.target.value))}
                />
            </div>

            {/* Glass Opacity */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Glass Opacity</label>
                <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.1"
                    defaultValue="0.5"
                    className="range-slider"
                    onChange={(e) => setGlassOpacity(parseFloat(e.target.value))}
                />
            </div>

            {/* Show Glass Surfaces */}
            <div className="flex items-center space-x-2">
                <label className="text-sm font-medium">Show Glass Surfaces</label>
                <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={(e) => setShowGlassSurfaces(e.target.checked)}
                    className="form-checkbox"
                />
            </div>

            {/* Rotation Speed */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Rotation Speed</label>
                <input
                    type="range"
                    min="0.0"
                    max="0.1"
                    step="0.01"
                    defaultValue="0.01"
                    className="range-slider"
                    onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                />
            </div>

            {/* Line Color */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Line Color</label>
                <input
                    type="color"
                    defaultValue="#000000"
                    onChange={(e) => setLineColor(e.target.value)}
                    className="form-input"
                />
            </div>

            {/* Connector Color */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Connector Color</label>
                <input
                    type="color"
                    defaultValue="#000000"
                    onChange={(e) => setConnectorColor(e.target.value)}
                    className="form-input"
                />
            </div>

            {/* Node Color */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Node Color</label>
                <input
                    type="color"
                    defaultValue="#000000"
                    onChange={(e) => setNodeColor(e.target.value)}
                    className="form-input"
                />
            </div>

            {/* Camera Position X */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Camera Position X</label>
                <input
                    type="number"
                    step="0.1"
                    defaultValue="0"
                    onChange={(e) => setCameraPosition(prev => [parseFloat(e.target.value), prev[1], prev[2]])}
                    className="form-input"
                />
            </div>

            {/* Camera Position Y */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Camera Position Y</label>
                <input
                    type="number"
                    step="0.1"
                    defaultValue="0"
                    onChange={(e) => setCameraPosition(prev => [prev[0], parseFloat(e.target.value), prev[2]])}
                    className="form-input"
                />
            </div>

            {/* Camera Position Z */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Camera Position Z</label>
                <input
                    type="number"
                    step="0.1"
                    defaultValue="0"
                    onChange={(e) => setCameraPosition(prev => [prev[0], prev[1], parseFloat(e.target.value)])}
                    className="form-input"
                />
            </div>

            {/* Camera FOV */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Camera FOV</label>
                <input
                    type="range"
                    min="30"
                    max="120"
                    step="1"
                    defaultValue="60"
                    className="range-slider"
                    onChange={(e) => setCameraFov(parseFloat(e.target.value))}
                />
            </div>

            {/* Background */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Background</label>
                <input
                    type="color"
                    defaultValue="#000000"
                    onChange={(e) => setBackground(e.target.value)}
                    className="form-input"
                />
            </div>

            {/* Ambient Light Intensity */}
            <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium">Ambient Light Intensity</label>
                <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.1"
                    defaultValue="0.5"
                    className="range-slider"
                    onChange={(e) => setAmbientLightIntensity(parseFloat(e.target.value))}
                />
            </div>

            {/* Spotlight Settings */}
            <div className="flex flex-col space-y-1 col-span-full">
                <h3 className="text-lg font-semibold">Spotlight Settings</h3>
                {/* Position */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position X</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, position: [parseFloat(e.target.value), prev.position[1], prev.position[2]] }))}
                        className="form-input"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position Y</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, position: [prev.position[0], parseFloat(e.target.value), prev.position[2]] }))}
                        className="form-input"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position Z</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, position: [prev.position[0], prev.position[1], parseFloat(e.target.value)] }))}
                        className="form-input"
                    />
                </div>

                {/* Angle */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Angle</label>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.5"
                        className="range-slider"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, angle: parseFloat(e.target.value) }))}
                    />
                </div>

                {/* Penumbra */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Penumbra</label>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        defaultValue="0.5"
                        className="range-slider"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, penumbra: parseFloat(e.target.value) }))}
                    />
                </div>

                {/* Intensity */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Intensity</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        defaultValue="1"
                        className="range-slider"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, intensity: parseFloat(e.target.value) }))}
                    />
                </div>

                {/* Color */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Color</label>
                    <input
                        type="color"
                        defaultValue="#ffffff"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, color: e.target.value }))}
                        className="form-input"
                    />
                </div>

                {/* Shadow Map Size */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Shadow Map Size Width</label>
                    <input
                        type="number"
                        defaultValue="512"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, shadowMapSize: { ...prev.shadowMapSize, width: parseInt(e.target.value, 10) } }))}
                        className="form-input"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Shadow Map Size Height</label>
                    <input
                        type="number"
                        defaultValue="512"
                        onChange={(e) => setSpotlightSettings(prev => ({ ...prev, shadowMapSize: { ...prev.shadowMapSize, height: parseInt(e.target.value, 10) } }))}
                        className="form-input"
                    />
                </div>
            </div>

            {/* Point Light Settings */}
            <div className="flex flex-col space-y-1 col-span-full">
                <h3 className="text-lg font-semibold">Point Light Settings</h3>
                {/* Position */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position X</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setPointLightSettings(prev => ({ ...prev, position: [parseFloat(e.target.value), prev.position[1], prev.position[2]] }))}
                        className="form-input"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position Y</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setPointLightSettings(prev => ({ ...prev, position: [prev.position[0], parseFloat(e.target.value), prev.position[2]] }))}
                        className="form-input"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position Z</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setPointLightSettings(prev => ({ ...prev, position: [prev.position[0], prev.position[1], parseFloat(e.target.value)] }))}
                        className="form-input"
                    />
                </div>

                {/* Intensity */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Intensity</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        defaultValue="1"
                        className="range-slider"
                        onChange={(e) => setPointLightSettings(prev => ({ ...prev, intensity: parseFloat(e.target.value) }))}
                    />
                </div>

                {/* Color */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Color</label>
                    <input
                        type="color"
                        defaultValue="#ffffff"
                        onChange={(e) => setPointLightSettings(prev => ({ ...prev, color: e.target.value }))}
                        className="form-input"
                    />
                </div>
            </div>

            {/* Directional Light Settings */}
            <div className="flex flex-col space-y-1 col-span-full">
                <h3 className="text-lg font-semibold">Directional Light Settings</h3>
                {/* Position */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position X</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setDirectionalLightSettings(prev => ({ ...prev, position: [parseFloat(e.target.value), prev.position[1], prev.position[2]] }))}
                        className="form-input"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position Y</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setDirectionalLightSettings(prev => ({ ...prev, position: [prev.position[0], parseFloat(e.target.value), prev.position[2]] }))}
                        className="form-input"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Position Z</label>
                    <input
                        type="number"
                        step="0.1"
                        defaultValue="0"
                        onChange={(e) => setDirectionalLightSettings(prev => ({ ...prev, position: [prev.position[0], prev.position[1], parseFloat(e.target.value)] }))}
                        className="form-input"
                    />
                </div>

                {/* Intensity */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Intensity</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        defaultValue="1"
                        className="range-slider"
                        onChange={(e) => setDirectionalLightSettings(prev => ({ ...prev, intensity: parseFloat(e.target.value) }))}
                    />
                </div>

                {/* Color */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium">Color</label>
                    <input
                        type="color"
                        defaultValue="#ffffff"
                        onChange={(e) => setDirectionalLightSettings(prev => ({ ...prev, color: e.target.value }))}
                        className="form-input"
                    />
                </div>
            </div>
        </div>
    );
};

export default TesseractSettings;
