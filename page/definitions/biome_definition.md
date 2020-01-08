
# Biome Definition

A Biome Definition is a table representing the properties and callbacks of a biome. Biome Definitions are supplied when calling [zepha.register_biome](/docs/methods/zepha_register_biome). The biome definitions for registered biomes can be found at runtime in the [zepha.registered_biomes](/docs/tables/registered_tables#zepha_registered_biomes) table.

The properties and callbacks that can be used in a Biome Definition are as follows.

## Properties

### temperature

The general temperature of the biome. This value is between -1 & 1, where -1 is roughly -100 degrees, one is 100 degrees, and 0 is 0 degrees, in celcius. The world generator will naturally generate temperature ranges between -10 degrees and 60 degrees celcius.

`temperature = 20/100 -- 20 degrees`

### humidity

The general humidity of the biome. This value is between 0 & 1, which correlates to percentage of air humidity from 0% to 100%. The world generator will naturally generate humidity ranges between 0% and 100% humidity.

`humidity = 93/100 -- 93% humidity`

### roughness

The general roughness of the biome. This value is used as a voronoi diagram point, and not actually related to the generation of the terrain itself. This value is between 0 & 1. Though there are no strict units, a basic reference would be 0 for salt flats, 100 for Mount Everest, and 20 for rolling plains. The world generator will naturally generate roughness ranges between 0% and 100%.

`roughness = 0.20 -- 20% roughness`
