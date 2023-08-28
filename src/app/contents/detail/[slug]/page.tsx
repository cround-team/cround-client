"use client";

import { DotsVerticalIcon } from "@/assets/icons";
import useContentDetail from "@/components/domain/contents/hooks/useContentDetail";
import {
  CreatorInfoBox,
  DeleteModal,
  ModifyDropdown,
} from "@/components/common";
import * as S from "./styled";

type ContentDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function ContentDetailPage({ params }: ContentDetailPageProps) {
  const {
    isOpenDropdown,
    isOpenDeleteModal,
    handleToggleDropdown,
    getBaseInfoProps,
    getCreatorInfoProps,
    getDropdownProps,
    getDeleteModalProps,
  } = useContentDetail({
    id: params.slug,
  });

  return (
    <>
      <S.Section>
        <S.TextWrapper>
          <S.Head>
            <span>{getBaseInfoProps().platformType}</span>
            {getBaseInfoProps().isOwned && (
              <button type="button" onClick={handleToggleDropdown}>
                <DotsVerticalIcon />
              </button>
            )}
            {isOpenDropdown && <ModifyDropdown {...getDropdownProps()} />}
          </S.Head>
          <h3>{getBaseInfoProps().title}</h3>
          <p>{getBaseInfoProps().content}</p>
        </S.TextWrapper>
        <CreatorInfoBox {...getCreatorInfoProps()} />
      </S.Section>
      {/* 모달 */}
      {isOpenDeleteModal && (
        <DeleteModal {...getDeleteModalProps()}>
          <h3>콘텐츠를 정말 삭제하시겠습니까?</h3>
          <p>
            한번 삭제한 콘텐츠는
            <br />
            복구가 불가능합니다.
          </p>
        </DeleteModal>
      )}
    </>
  );
}
