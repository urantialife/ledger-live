import React, { useCallback, useState } from "react";
import { Flex } from "@ledgerhq/native-ui";
import { useDispatch } from "react-redux";
import { Device } from "@ledgerhq/live-common/lib/hw/actions/types";
import connectManager from "@ledgerhq/live-common/lib/hw/connectManager";
import { createAction } from "@ledgerhq/live-common/lib/hw/actions/manager";
import DeviceActionModal from "../../../../../components/DeviceActionModal";
import SelectDevice from "../../../../../components/SelectDevice";
import { TrackScreen } from "../../../../../analytics";
import Button from "../../../../../components/PreventDoubleClickButton";

import {
  installAppFirstTime,
  setLastConnectedDevice,
  setReadOnlyMode,
} from "../../../../../actions/settings";

const action = createAction(connectManager);

const ConnectNanoScene = ({
  onNext,
  deviceModelId,
}: {
  onNext: () => void;
  deviceModelId: string;
}) => {
  const dispatch = useDispatch();
  const [device, setDevice] = useState<Device | undefined>();

  const onSetDevice = useCallback(
    device => {
      dispatch(setLastConnectedDevice(device));
      setDevice(device);
      dispatch(setReadOnlyMode(false));
    },
    [dispatch],
  );

  const directNext = useCallback(
    device => {
      dispatch(setLastConnectedDevice(device));
      dispatch(setReadOnlyMode(false));
      onNext();
    },
    [dispatch, onNext],
  );

  const onResult = useCallback(
    (info: any) => {
      /** if list apps succeed we update settings with state of apps installed */
      if (info) {
        const hasAnyAppinstalled =
          info.result &&
          info.result.installed &&
          info.result.installed.length > 0;

        dispatch(installAppFirstTime(hasAnyAppinstalled));
        setDevice(undefined);
        dispatch(setReadOnlyMode(false));
        onNext();
      }
    },
    [dispatch, onNext],
  );

  const usbOnly = ["nanoS", "nanoSP", "blue"].includes(deviceModelId);

  return (
    <>
      <TrackScreen category="Onboarding" name="PairNew" />
      <Flex flex={1}>
        <SelectDevice
          withArrows
          usbOnly={usbOnly}
          deviceModelId={deviceModelId}
          onSelect={usbOnly ? onSetDevice : directNext}
          autoSelectOnAdd
          hideAnimation
        />
      </Flex>
      <DeviceActionModal
        onClose={setDevice}
        device={device}
        onResult={onResult}
        action={action}
        request={null}
      />
    </>
  );
};

ConnectNanoScene.id = "ConnectNanoScene";

const Next = ({ onNext }: { onNext: () => void }) => {
  const dispatch = useDispatch();

  return __DEV__ ? (
    <Button
      mt={7}
      type="color"
      outline
      onPress={() => {
        dispatch(setReadOnlyMode(false));
        onNext();
      }}
    >
      (DEV) skip this step
    </Button>
  ) : null;
};

ConnectNanoScene.Next = Next;

export default ConnectNanoScene;
