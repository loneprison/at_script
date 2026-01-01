/*
    Explanation:
    In the original definitions, AVLayer type guards are often implemented as:
        const isAVLayer = (layer: Layer): layer is AVLayer => {
            return layer instanceof TextLayer || layer instanceof ShapeLayer || layer instanceof AVLayer;
        };
    Although this works functionally, it is semantically misleading: it treats `TextLayer` and `ShapeLayer` as equivalent to `AVLayer`.
    Many use cases require distinguishing a strict `AVLayer` from AVLayer-like cases that include `TextLayer` and `ShapeLayer`.
    Introducing a separate union type makes these different intents explicit and improves code clarity.
*/
declare type RasterLayer = AVLayer | ShapeLayer | TextLayer;