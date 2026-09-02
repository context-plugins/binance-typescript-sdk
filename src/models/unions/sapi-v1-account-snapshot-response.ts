import { s, type Schema } from "../../core/index.js";
import { snapshotFuturesSchema, type SnapshotFutures } from "../snapshot-futures.js";
import { snapshotMarginSchema, type SnapshotMargin } from "../snapshot-margin.js";
import { snapshotSpotSchema, type SnapshotSpot } from "../snapshot-spot.js";

export type SapiV1AccountSnapshotResponse = SnapshotSpot | SnapshotMargin | SnapshotFutures;

export const sapiV1AccountSnapshotResponseSchema: Schema<SapiV1AccountSnapshotResponse> =
  s.of<SapiV1AccountSnapshotResponse>(
    s.union([
      s.lazy(() => snapshotSpotSchema),
      s.lazy(() => snapshotMarginSchema),
      s.lazy(() => snapshotFuturesSchema),
    ]),
  );
