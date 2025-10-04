"use client";
import { useStorage } from "@liveblocks/react";
import { memo } from "react";
import { LayerType } from "@/types/canvas";
import { Rectangle } from "./toolbar-items/rectangle";
import { Ellipse } from "./toolbar-items/ellipse";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}
export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) {
      return null;
    }
    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor="black"
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor="black"
          />
        );
      // case LayerType.Ellipse:
      // case LayerType.Path:
      // case LayerType.Text:
      // case LayerType.Note:
      default:
        console.warn("unkkown type");
        return null;
    }
    return <div>hi!</div>;
  }
);
LayerPreview.displayName = "Layer Preview";
