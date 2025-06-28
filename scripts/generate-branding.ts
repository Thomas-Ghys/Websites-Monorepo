import * as fileSaver from 'fs';
import { JsonObject, JsonValue } from '@angular-devkit/core';

// Start of script
const brandingPaths = './branding';
const brandNames: string[] = loadBrandNames();

brandNames.forEach((brandName: string) => {
    createBrandingSassFile(brandName);
});
// End of script

// Function to load the brand names
function loadBrandNames(): string[] {
	return fileSaver.readdirSync(brandingPaths).filter((brandName: string) => fileSaver.lstatSync(brandingPaths + '/' + brandName).isDirectory());
}

// Function to create branding sass file
function createBrandingSassFile(brandName: string): void {
    // Create brand specific filepaths and objects
	const brandSassFilePath: string = brandingPaths + '/' + brandName + '/' + 'colours.scss';
	const jsonFileObject: JsonObject = loadJson(brandingPaths + '/' + brandName + '/' + 'colours.json');

    // Start the branding file with the global imports
    fileSaver.writeFileSync(brandSassFilePath,
        '@use "libs/theme/tokens/elevation-tokens.scss";\n' +
        '@use "libs/theme/tokens/shape-tokens.scss";\n' +
        '@use "libs/theme/tokens/typography-tokens.scss";\n' +
        '\n\n' +
        '$brand: (\n'
    );

    // Add the core colours section to the brand file
    addCoreColours(brandSassFilePath, jsonFileObject.coreColors);
    // Add the schemes section to the brand file
    addSchemes(brandSassFilePath, jsonFileObject.schemes);
    // Add the palettes section to the brand file
    addPalettes(brandSassFilePath, jsonFileObject.palettes);

    // End the branding file with the import of the theme builder
    fileSaver.appendFileSync(brandSassFilePath,
        ');' +
        '\n\n' +
        '@use "libs/theme/theme-builder.scss";'
    );
}

// Function to load the json object from a file
function loadJson(file: string): JsonObject {
	return JSON.parse(fileSaver.readFileSync(file, 'utf-8'));
}

// Function to add the core colours section
function addCoreColours(file: string, coreColors: JsonValue): void {
    // Start the core colours subsection at the correct tab
    fileSaver.appendFileSync(file,
        '\tcoreColors: (\n'
    );

    // Loop through each color in the core colours section
    Object.keys(coreColors).forEach((key: string) => {
        // Add the core colours and their value to the file
        // /([A-Z])+/g, '-$1' => insert a dash before each capital
        // Then trim all spaces and replace everything with lowercase
        fileSaver.appendFileSync(file,
            `\t\t${key.replace(/([A-Z])+/g, '-$1').trim().toLowerCase()}: ${coreColors[key]},\n`
        );
    });

    // Close the core colours subsection
    fileSaver.appendFileSync(file,
        '\t),\n'
    );
}

// Function to add the scheme section
function addSchemes(file: string, schemes: JsonValue): void {
    // Start the schemes subsection at the correct tab
    fileSaver.appendFileSync(file,
        '\tschemes: ( \n'
    );

    // Loop through each scheme in the schemes section
    Object.keys(schemes).forEach((scheme: string) => {
        // Start the scheme subsection
        fileSaver.appendFileSync(file,
            `\t\t${scheme}: (\n`
        );

        // Loop through each token in the scheme subsection
        Object.keys(schemes[scheme]).forEach((key: string) => {
            // Add the scheme and their values to the file
            // /([A-Z])+/g, '-$1' => insert a dash before each capital
            // Then trim all spaces and replace everything with lowercase
            fileSaver.appendFileSync(file,
                `\t\t\t${key.replace(/([A-Z])+/g, '-$1').trim().toLowerCase()}: ${schemes[scheme][key]},\n`
            );
        });

        // Close the scheme subsection
        fileSaver.appendFileSync(file,
            `\t\t),\n`
        );
    });

    // Close the schemes subsection
    fileSaver.appendFileSync(file,
        '\t),\n'
    );
}

// Function to add the palette section
function addPalettes(file: string, palettes: JsonValue): void {
    // Start the palettes subsection at the correct tab
    fileSaver.appendFileSync(file,
        '\tpalettes: ( \n'
    );

    // Loop through each palette in the palettes section
    Object.keys(palettes).forEach((palette: string) => {
        // Start the palette subsection
        fileSaver.appendFileSync(file,
            `\t\t${palette}: (\n`
        );

        // Loop through each token in the palette subsection
        Object.keys(palettes[palette]).forEach((key: string) => {
            // Add the palette and their values to the file
            // /([A-Z])+/g, '-$1' => insert a dash before each capital
            // Then trim all spaces and replace everything with lowercase
            fileSaver.appendFileSync(file,
                `\t\t\t${key.replace(/([A-Z])+/g, '-$1').trim().toLowerCase()}: ${palettes[palette][key]},\n`
            );
        });

        // Close the palette subsection
        fileSaver.appendFileSync(file,
            `\t\t),\n`
        );
    });

    // Close the palettes subsection
    fileSaver.appendFileSync(file,
        '\t),\n'
    );
}
